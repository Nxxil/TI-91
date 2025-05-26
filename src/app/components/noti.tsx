'use client';
import React from 'react';

export default function NotificationComponent() {
  const handleButtonClick = () => {
    if ('Notification' in window) {
      if (window.Notification.permission === 'granted') {
        new window.Notification('¡Bienvenido a Lawrence Motors!', {
          body: 'Explora nuestros autos y encuentra el tuyo.',
          icon: '/logo.png'
        });
      } else if (window.Notification.permission !== 'denied') {
        window.Notification.requestPermission().then((permission: NotificationPermission) => {
          if (permission === 'granted') {
            new window.Notification('¡Bienvenido a Lawrence Motors!', {
              body: 'Explora nuestros autos y encuentra el tuyo.',
              icon: '/logo.png'
            });
          }
        });
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
      <button
        onClick={handleButtonClick}
        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
      >
        Notificarme
      </button>
      <p className="mt-2">Haz clic para recibir una notificación de bienvenida.</p>
    </div>
  );
}
