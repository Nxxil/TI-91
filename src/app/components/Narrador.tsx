'use client';

import React, { useRef } from 'react';

const Narrador = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const reproducirAudio = () => {
    audioRef.current?.play();
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
      <div style={{ marginTop: '1rem' }}>
        <audio ref={audioRef} src="/explicacion.mp3" controls />
      </div>
    </div>
  );
};

export default Narrador;
