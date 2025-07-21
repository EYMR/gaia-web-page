import {ArrowRight, Calendar, User} from "lucide-react";
import Link from "next/link";

import {blogPosts} from "@/data/posts";

export default function PostCard() {
    {/* Blog Posts Grid */
    }
    return (
        <section className="mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <article
                        key={post.id}
                        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                    >
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                                <span className="text-gray-500 text-xs">{post.readTime}</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>

                            <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                <div className="flex items-center">
                                    <User className="h-4 w-4 mr-1"/>
                                    {post.author}
                                </div>
                                <div className="flex items-center">
                                    <Calendar className="h-4 w-4 mr-1"/>
                                    {post.date}
                                </div>
                            </div>

                            {/* Enlace al artículo usando slug */}
                            <Link
                                href={`/blog/${post.slug}`}
                                className="flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                            >
                                Leer más
                                <ArrowRight className="h-4 w-4 ml-1"/>
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>

    )
}
