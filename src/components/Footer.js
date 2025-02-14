import React from 'react';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8d7da', color: '#721c24' }}>
            <p>&copy; {new Date().getFullYear()} Virus Project. All rights reserved.</p>
            <p>
                <a href="/privacy-policy" style={{ color: '#721c24', textDecoration: 'underline' }}>Privacy Policy</a> | 
                <a href="/terms-of-service" style={{ color: '#721c24', textDecoration: 'underline' }}> Terms of Service</a>
            </p>
        </footer>
    );
};

export default Footer;