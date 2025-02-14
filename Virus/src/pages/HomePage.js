import React from 'react';
import KeyInput from '../components/KeyInput';
import './styles.css';

const HomePage = () => {
    return (
        <div className="warning-screen">
            <h1 className="warning-title">¡Advertencia de Seguridad!</h1>
            <p className="warning-message">Sistema comprometido. Introduzca la clave para desbloquear.</p>
            <KeyInput />
        </div>
    );
};

export default HomePage;