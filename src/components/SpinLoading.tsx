import type React from "react"

export default function SpinLoading({ children, loaded }: { children: React.ReactNode, loaded: boolean }) {
    if (loaded) return children
    if (!loaded) return (
        <div className="flex flex-col items-center justify-center mt-10 h-full">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600"></div>
            <h1 className="text-gray-600 mt-4">Carregando...</h1>
        </div>
    );
};