import vehiculos from '@/app/vehiculos/data';
import styles from '@/app/styles/vehiculos.module.css';


export default function Vehiculos() {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                <div className={styles.table} style={{ width: '100%' }}>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                            gap: '2rem',
                            width: '100%',
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
                                <h1 style={{ fontSize: '1.2rem', margin: '8px 0' }}>
                                    {vehiculo.nombre}
                                </h1>
                                <p>{vehiculo.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
                <div className={styles.filtros}>
                    <input
                        type="text"
                        placeholder="Buscar por nombre..."
                        style={{
                            padding: '0.5rem',
                            width: '200px',
                            backgroundColor: 'inherit',
                            color: 'inherit', 
                        }}
                        className={styles.inputWhitePlaceholder}
                    />
                    <select
                        style={{ padding: '0.5rem', width: '150px' }}
                    >
                        <option value="" style={{ color: '#182538' }}>Todos los tipos</option>
                        <option value="auto" style={{ color: '#182538' }}>Auto</option>
                        <option value="camioneta" style={{ color: '#182538' }}>Camioneta</option>
                        <option value="moto" style={{ color: '#182538' }}>SUV</option>
                    </select>
                    {/* Puedes agregar más filtros aquí */}
                </div>
        </div>
    );
}