import matter from "gray-matter";
import {MDXRemote} from "next-mdx-remote/rsc";
import fs from "node:fs/promises";
import path from "node:path";

import {mdxComponents} from "@/components/blog/mdx-components";
import PageLayout from "@/components/page-layout";
import {blogPosts} from "@/data/posts";


const CONTENT_DIR = path.join(process.cwd(), "src/app/blog/content/blog");

/* ——— genera rutas estáticas ——— */
export async function generateStaticParams() {
    return blogPosts.map((p) => ({slug: p.slug}));
}

/* ——— título SEO ——— */
export async function generateMetadata({params}: { params: { slug: string } }) {
    const file = await fs.readFile(path.join(CONTENT_DIR, `${params.slug}.mdx`));
    const {data} = matter(file);
    return {title: data.title ?? "Artículo"};
}

/* ——— página ——— */
export default async function BlogPost({params}: { params: { slug: string } }) {
    const filePath = path.join(CONTENT_DIR, `${params.slug}.mdx`);
    const source = await fs.readFile(filePath, "utf-8");

    const {content, data} = matter(source);   // data = front-matter

    return (
        <PageLayout title={data.title}>
            <article className="prose lg:prose-lg mx-auto py-16">
                <MDXRemote source={content} components={mdxComponents}/>
            </article>
        </PageLayout>
    );
}