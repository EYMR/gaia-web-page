import {notFound} from "next/navigation";

import PageLayout from "@/components/page-layout";
import {blogPosts} from "@/data/posts";

export async function generateStaticParams() {
    return blogPosts.map((p) => ({slug: p.slug}));
}

export async function generateMetadata({params}: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);
    return {title: post ? post.title : "Artículo"};
}

export default function BlogPost({params}: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) return notFound();

    return (
        <PageLayout title={post.title}>
            <article className="prose mx-auto py-16">
                <h1>{post.title}</h1>
                <p className="text-gray-500 text-sm">{post.date}</p>
                <p>{post.excerpt}</p>

                <p className="font-semibold mt-10">Contenido próximamente…</p>
            </article>
        </PageLayout>
    );
}