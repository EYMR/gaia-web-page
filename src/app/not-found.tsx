import Link from "next/link";

import PageLayout from "@/components/page-layout";

export default function NotFound() {
    return (
        <PageLayout>
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <p className="text-8xl font-extrabold text-green-600 mb-4">404</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Página no encontrada</h1>
                <p className="text-gray-600 text-lg max-w-md mb-8">
                    Lo sentimos, la página que buscas no existe o fue movida.
                </p>
                <Link
                    href="/"
                    className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                    Volver al inicio
                </Link>
            </div>
        </PageLayout>
    );
}
