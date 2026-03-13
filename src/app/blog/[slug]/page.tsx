import type {Metadata} from "next";

import fs from "fs";
import matter from "gray-matter";
import {ArrowLeft, Calendar, Clock, Tag, User} from "lucide-react";
import {MDXRemote} from "next-mdx-remote/rsc";
import Link from "next/link";
import {notFound} from "next/navigation";
import path from "path";

import PageLayout from "@/components/page-layout";
import {Alert} from "@/components/ui/alert";
import {blogPosts} from "@/data/posts";
import {SITE_NAME, SITE_URL} from "@/lib/constants";

// ── Helpers ────────────────────────────────────────────────────
const CONTENT_DIR = path.join(process.cwd(), "src/app/blog/content/blog");

function findPost(slug: string) {
    return blogPosts.find((p) => p.slug === slug);
}

function loadMdx(slug: string): string | null {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, "utf-8");
    const {content} = matter(raw);
    return content;
}

// ── Static params ──────────────────────────────────────────────
export function generateStaticParams() {
    return blogPosts.map((p) => ({slug: p.slug}));
}

export const dynamicParams = false;

// ── Per-post metadata (SEO) ────────────────────────────────────
export async function generateMetadata({params}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const {slug} = await params;
    const post = findPost(slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.excerpt,
        keywords: post.keywords,
        alternates: {canonical: `/blog/${post.slug}`},
        openGraph: {
            title: `${post.title} | ${SITE_NAME}`,
            description: post.excerpt,
            url: `/blog/${post.slug}`,
            type: "article",
            publishedTime: post.dateISO,
            authors: [post.author ?? SITE_NAME],
            images: post.image ? [{url: post.image, alt: post.title}] : undefined,
        },
        twitter: {
            title: `${post.title} | ${SITE_NAME}`,
            description: post.excerpt,
            images: post.image ? [post.image] : undefined,
        },
    };
}

// ── Article JSON-LD ────────────────────────────────────────────
function ArticleJsonLd({post}: { post: (typeof blogPosts)[number] }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: post.image ?? `${SITE_URL}/logo.jpg`,
        datePublished: post.dateISO,
        author: {
            "@type": "Person",
            name: post.author ?? SITE_NAME,
        },
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/logo.jpg`,
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_URL}/blog/${post.slug}`,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
    );
}

// ── Page component ─────────────────────────────────────────────
export default async function BlogPostPage({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
    const post = findPost(slug);
    if (!post) return notFound();

    const mdxSource = loadMdx(slug);

    return (
        <>
            <ArticleJsonLd post={post}/>
            <PageLayout breadcrumbs={[{label: "Blog", href: "/blog"}, {label: post.title}]}>
                <article className="max-w-3xl mx-auto">
                    {/* Back link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-600 transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4"/>
                        Volver al blog
                    </Link>

                    {/* Header */}
                    <header className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                {post.category}
                            </span>
                            <span className="flex items-center gap-1 text-gray-500 text-xs">
                                <Clock className="w-3 h-3"/>{post.readTime}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            {post.title}
                        </h1>

                        <p className="text-lg text-gray-600 mb-6">{post.excerpt}</p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-b border-gray-200 pb-6">
                            {post.author && (
                                <span className="flex items-center gap-1">
                                    <User className="w-4 h-4"/>{post.author}
                                </span>
                            )}
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4"/>{post.date}
                            </span>
                            {post.keywords && post.keywords.length > 0 && (
                                <span className="flex items-center gap-1">
                                    <Tag className="w-4 h-4"/>{post.keywords.slice(0, 3).join(", ")}
                                </span>
                            )}
                        </div>
                    </header>

                    {/* MDX body or fallback */}
                    <div className="prose prose-green prose-lg max-w-none
                        prose-headings:text-gray-900 prose-headings:font-bold
                        prose-p:text-gray-700 prose-p:leading-relaxed
                        prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-gray-900
                        prose-ul:text-gray-700 prose-ol:text-gray-700
                        prose-li:marker:text-green-600">
                        {mdxSource ? (
                            <MDXRemote source={mdxSource} components={{Alert}}/>
                        ) : (
                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-amber-800">
                                <p className="font-medium">Próximamente</p>
                                <p className="text-sm mt-1">
                                    Este artículo está en proceso de redacción. Vuelve pronto para leer el contenido completo.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Footer CTA */}
                    <footer className="mt-12 pt-8 border-t border-gray-200">
                        <div className="bg-green-50 rounded-lg p-6 text-center">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">¿Te interesa saber más?</h3>
                            <p className="text-gray-600 mb-4">
                                Agenda una consulta personalizada y resuelve todas tus dudas.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link
                                    href="/calendar"
                                    className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                >
                                    Agendar consulta
                                </Link>
                                <Link
                                    href="/blog"
                                    className="border border-green-600 text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                                >
                                    Ver más artículos
                                </Link>
                            </div>
                        </div>
                    </footer>
                </article>
            </PageLayout>
        </>
    );
}