import React, { useState } from 'react';
import KeyInput from '../components/KeyInput';
import './styles.css';

const HomePage = () => {
    const [isValid, setIsValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleValidation = (isValid, message) => {
        setIsValid(isValid);
        setErrorMessage(message);
        if (isValid) {
            // Trigger love letter animation
            document.getElementById('love-letter').classList.add('animate');
        }
    };

    return (
        <div className="homepage">
            <div className="warning-screen">
                <h1>Security Warning</h1>
                <p>Please enter the correct key to proceed.</p>
                <KeyInput onValidate={handleValidation} />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            <div id="love-letter" className="love-letter">
                <h2>Dear User,</h2>
                <p>Your access has been granted. Welcome!</p>
            </div>
        </div>
    );
};

export default HomePage;