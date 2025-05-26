'use client'
import { useRouter } from 'next/navigation'
import { showToast } from 'nextjs-toast-notify';
import vehiculos from '@/app/vehiculos/data';
import styles from '@/app/styles/vehiculos.module.css';
import Link from 'next/link';


export default function Vehiculos() {

    const router = useRouter();

    const handleClick = (e, vehiculoNombre) => {
        // Prevenir la navegación inmediata
        e.preventDefault();
        showToast.success(`Vas a ${vehiculoNombre}`);
        // Redirigir después de un breve retardo
        setTimeout(() => {
        router.push('/construccion');
        }, 5000);
    };

    return (
        <div>
            <div className={styles.container} style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                <div className={styles.table} style={{ width: '100%' }}>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                            gap: '2rem',
                            width: '70%',
                        }}
                    >
                        {vehiculos.map((vehiculo, idx) => (
                            <div
                                key={idx}
                                style={{
                                    textAlign: 'center',
                                    padding: '2rem',
                                    background: 'var(--table-bg, transparent)',
                                    borderRadius: '8px',
                                    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                                }}
                            >
                                <img
                                    src={vehiculo.imagen}
                                    alt={vehiculo.nombre}
                                    style={{ display: 'block', margin: '0 auto 8px', maxWidth: '100%', height: 'auto' }}
                                />
                                <Link href="/construccion" legacyBehavior>
                                    <a
                                        style={{ textDecoration: 'none', cursor: 'pointer' }}
                                        onClick={(e) => handleClick(e, vehiculo.nombre)}
                                    >
                                        <h1 style={{ fontSize: '1.2rem', margin: '8px 0' }}>
                                        {vehiculo.nombre}
                                        </h1>
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.filtros} >
                    <input
                        type="text"
                        placeholder="Buscar por nombre..."
                        style={{
                            padding: '0.5rem',
                            width: '200px',
                            backgroundColor: 'inherit',
                            color: 'inherit',
                            borderRadius: '8px',
                            textAlign: 'center',
                        }}
                    />
                    <select
                        style={{ padding: '0.5rem', width: '100%', textAlign: 'center',}}
                    >
                        <option value="" style={{ color: '#182538' }}>Todos los tipos</option>
                        <option value="auto" style={{ color: '#182538' }}>Auto</option>
                        <option value="camioneta" style={{ color: '#182538' }}>Camioneta</option>
                        <option value="moto" style={{ color: '#182538' }}>SUV</option>
                    </select>
                    <select
                        style={{ padding: '0.5rem', width: '100%', textAlign: 'center', marginTop: '0.5rem' }}
                    >
                        <option value="" style={{ color: '#182538' }}>Todas las marcas</option>
                        <option value="toyota" style={{ color: '#182538' }}>Toyota</option>
                        <option value="ford" style={{ color: '#182538' }}>Ford</option>
                        <option value="chevrolet" style={{ color: '#182538' }}>Chevrolet</option>
                        <option value="honda" style={{ color: '#182538' }}>Honda</option>
                    </select>
                    <select
                        style={{ padding: '0.5rem', width: '100%', textAlign: 'center', marginTop: '0.5rem' }}
                    >
                        <option value="" style={{ color: '#182538' }}>Todos los años</option>
                        <option value="2024" style={{ color: '#182538' }}>2024</option>
                        <option value="2023" style={{ color: '#182538' }}>2023</option>
                        <option value="2022" style={{ color: '#182538' }}>2022</option>
                        <option value="2021" style={{ color: '#182538' }}>2021</option>
                    </select>
                    <select
                        style={{ padding: '0.5rem', width: '100%', textAlign: 'center', marginTop: '0.5rem' }}
                    >
                        <option value="" style={{ color: '#182538' }}>Todos los colores</option>
                        <option value="blanco" style={{ color: '#182538' }}>Blanco</option>
                        <option value="negro" style={{ color: '#182538' }}>Negro</option>
                        <option value="rojo" style={{ color: '#182538' }}>Rojo</option>
                        <option value="azul" style={{ color: '#182538' }}>Azul</option>
                    </select>
                </div>
            </div>
        </div>
    );
}