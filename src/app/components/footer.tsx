
export default function Footer() {
    return (
        <footer className="mt-10 bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center px-4">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-2">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <p className="text-xl sm:text-lg">INFO</p>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <p className="text-xl sm:text-lg">INFO</p>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <p className="text-xl sm:text-lg">INFO</p>
                    </a>
                </div>
                <p className="text-xs sm:text-sm">&copy; 2025 Lawrence Motors. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}