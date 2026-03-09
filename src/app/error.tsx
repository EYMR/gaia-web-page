"use client";

import {useEffect} from "react";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({error, reset}: ErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
            <div className="bg-white rounded-lg shadow-sm p-10 max-w-md w-full">
                <p className="text-5xl mb-4">⚠️</p>
                <h1 className="text-2xl font-bold text-gray-900 mb-3">Algo salió mal</h1>
                <p className="text-gray-600 mb-6">
                    Ocurrió un error inesperado. Por favor intenta de nuevo.
                </p>
                <button
                    onClick={reset}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                    Intentar de nuevo
                </button>
            </div>
        </div>
    );
}
