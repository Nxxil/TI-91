'use client';

import React from 'react';

const Narrador = () => {
  const reproducirAudio = () => {
    const audio = new Audio('/explicacion.mp3');
    audio.play();
  };

  return (
    <div style={{ marginTop: '1rem', textAlign: 'center' }}>
      <button
        onClick={reproducirAudio}
        style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        ▶️ Escuchar explicación
      </button>
    </div>
  );
};

export default Narrador;
