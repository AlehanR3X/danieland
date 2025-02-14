import React from 'react';

const Header = () => {
    return (
        <header style={{ backgroundColor: '#ffcc00', padding: '10px', textAlign: 'center' }}>
            <h1 style={{ color: '#ff0000' }}>Advertencia de Seguridad</h1>
            <p style={{ fontSize: '18px' }}>Sistema comprometido. Introduzca la clave para desbloquear.</p>
        </header>
    );
};

export default Header;