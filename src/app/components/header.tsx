'use client'; 
import { ThemeToggle } from '@/app/theme-toggle';

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/app/styles/header.module.css';


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.img}><img src="/logo.png" alt="Logo de Lawrence Motors" /></div>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        ☰
      </div>
      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <Link href="/" className={styles.link}>Inicio</Link>
        <Link href="/vehiculos" className={styles.link}>Vehículos</Link>
        <Link href="/contacto" className={styles.link}>Contacto</Link>
        <Link href="/login" className={styles.link}>Iniciar Sesión</Link>
        <ThemeToggle/>
      </div>
    </nav>
  );
}