
export default function Footer() {
    return (
        <footer className="mt-10 bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center px-4">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <p className="text-base sm:text-lg md:text-xl">INFO</p>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <p className="text-base sm:text-lg md:text-xl">INFO</p>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <p className="text-base sm:text-lg md:text-xl">INFO</p>
                    </a>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm mt-4">&copy; 2025 Lawrence Motors. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}