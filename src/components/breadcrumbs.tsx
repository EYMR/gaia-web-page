import {ChevronRight, Home} from "lucide-react";
import Link from "next/link";

import {SITE_URL} from "@/lib/constants";

export interface BreadcrumbItem {
    label: string;
    href?: string;   // sin href = página actual (no es link)
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({items}: BreadcrumbsProps) {
    // Prepend "Inicio" always
    const trail: BreadcrumbItem[] = [{label: "Inicio", href: "/"}, ...items];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: trail.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            item: item.href ? `${SITE_URL}${item.href}` : undefined,
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />
            <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
                    {trail.map((item, i) => {
                        const isLast = i === trail.length - 1;
                        return (
                            <li key={i} className="flex items-center gap-1">
                                {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0"/>}
                                {isLast || !item.href ? (
                                    <span className={`${isLast ? "text-gray-900 font-medium" : ""} flex items-center gap-1`}>
                                        {i === 0 && <Home className="w-3.5 h-3.5"/>}
                                        {item.label}
                                    </span>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="hover:text-green-600 transition-colors flex items-center gap-1"
                                    >
                                        {i === 0 && <Home className="w-3.5 h-3.5"/>}
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
}

