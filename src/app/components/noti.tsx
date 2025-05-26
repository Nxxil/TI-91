'use client';
import React, { useEffect, useCallback } from 'react';

export default function NotificationComponent() {
  const sendNotification = () => {
    if ('Notification' in window && window.Notification.permission === 'granted') {
      new window.Notification('¡Bienvenido a Lawrence Motors!', {
        body: 'Explora nuestros autos y encuentra el tuyo.',
        icon: '/logo.png'
      });
    }
  };

  const requestNotificationPermission = useCallback(() => {
    if ('Notification' in window) {
      window.Notification.requestPermission().then((permission: NotificationPermission) => {
        if (permission === 'granted') {
          sendNotification();
        }
      });
    }
  }, []);

  useEffect(() => {
    if ('Notification' in window) {
      requestNotificationPermission();
    }
  }, [requestNotificationPermission]);

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