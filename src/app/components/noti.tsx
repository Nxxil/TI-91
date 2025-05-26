'use client';
import React, { useEffect, useCallback } from 'react';

export default function NotificationComponent() {
  const sendNotification = () => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
        alert('Las notificaciones solo funcionan en sitios HTTPS o localhost.');
        return;
      }
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
          } else {
            alert('Permiso de notificaciones denegado.');
          }
        });
      } else {
        alert('Permiso de notificaciones denegado.');
      }
    } else {
      alert('Las notificaciones no son compatibles con este navegador.');
    }
  };

  useEffect(() => {
    // No pedir permiso automáticamente, solo cuando el usuario haga clic
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
        <button 
            onClick={sendNotification} 
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
        >
            Notificarme
        </button>
        <p className="mt-2">Haz clic para recibir una notificación de bienvenida.</p>
    </div>
  );
}