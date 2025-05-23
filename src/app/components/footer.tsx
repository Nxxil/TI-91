
export default function Footer() {
    return (
        <footer className="mt-10 bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    {/* Enlaces de información */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full md:w-auto">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            <p className="text-base sm:text-lg md:text-xl">Sobre Nosotros</p>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            <p className="text-base sm:text-lg md:text-xl">Contacto</p>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            <p className="text-base sm:text-lg md:text-xl">Términos y Condiciones</p>
                        </a>
                    </div>
                    {/* Formulario de mensaje */}
                    <form className="bg-gray-700 rounded-lg p-4 w-full md:w-1/3 flex flex-col gap-3">
                        <p className="text-lg font-semibold mb-2">Envíanos un mensaje</p>
                        <input
                            type="text"
                            placeholder="Tu nombre"
                            className="rounded px-3 py-2 text-black focus:outline-none placeholder-white"
                            style={{ '::placeholder': { color: 'white' } }}
                        />
                        <input
                            type="email"
                            placeholder="Tu correo"
                            className="rounded px-3 py-2 text-black focus:outline-none placeholder-white"
                            style={{ '::placeholder': { color: 'white' } }}
                        />
                        <textarea
                            placeholder="Tu mensaje"
                            rows={3}
                            className="rounded px-3 py-2 text-black focus:outline-none resize-none placeholder-white"
                            style={{ '::placeholder': { color: 'white' } }}
                        />  <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 mt-2 transition"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm mt-6 text-center">&copy; 2025 Lawrence Motors. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}