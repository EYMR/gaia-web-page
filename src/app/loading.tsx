export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="flex flex-col items-center gap-4">
                <div className="h-12 w-12 rounded-full border-4 border-green-200 border-t-green-600 animate-spin"/>
                <p className="text-green-700 font-medium text-sm">Cargando...</p>
            </div>
        </div>
    );
}
