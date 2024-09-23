import React, { useState, useEffect } from 'react';
import styles from './styles.module.css'; // Estilos CSS para el componente

interface NotificationProps {
    message: string;
    type: 'success' | 'error' | 'info'; // Tipos de notificación
}

const Notification: React.FC<NotificationProps> = ({ message, type }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000); // Oculta la notificación después de 3 segundos

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className={`${styles.notification} ${styles[type]} ${isVisible ? styles.visible : ''}`}>
            {message}
        </div>
    );
};

export default Notification;
