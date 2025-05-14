import Image from "next/image";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-white-800 text-bgray-800 shadow-md rounded-lg">
        <Image src="/logo.png" alt="Logo" width={200} height={200} className="rounded-full" />
        <h1 className="text-3xl font-bold font-mono">LAWRENCE MOTORS</h1>
        <nav className="ml-50">
            <ul className="flex items-center justify-between space-x-10 text-2xl font-bold font-mono">
            <li><a href="#home" className="hover:underline">Inicio</a></li>
            <li><a href="#models" className="hover:underline">Modelos</a></li>
            <li><a href="#contact" className="hover:underline">Contacto</a></li>
            </ul>
        </nav>
        </header>
    );
}

