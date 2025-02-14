import React from 'react';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa' }}>
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p>
                <a href="#privacy-policy">Privacy Policy</a> | 
                <a href="#terms-of-service"> Terms of Service</a>
            </p>
        </footer>
    );
};

export default Footer;