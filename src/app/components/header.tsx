'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/app/styles/header.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.img}><img src="/logo.png" alt="" /></div>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        ☰
      </div>
      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <Link href="/" className={styles.link}>Inicio</Link>
        <Link href="/productos" className={styles.link}>Productos</Link>
        <Link href="/contacto" className={styles.link}>Contacto</Link>
        <Link href="/login" className={styles.link}>Iniciar Sesión</Link>
      </div>
    </nav>
  );
}