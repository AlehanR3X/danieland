import React, { useState } from 'react';

const KeyInput = () => {
    const [key, setKey] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setKey(e.target.value);
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const datePattern = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format
        if (!datePattern.test(key)) {
            setError('Please enter a valid date in YYYY-MM-DD format.');
        } else {
            // Handle successful validation (e.g., transition to love letter)
            console.log('Valid key:', key);
        }
    };

    return (
        <div className="key-input-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={key}
                    onChange={handleChange}
                    placeholder="Enter your key (YYYY-MM-DD)"
                    className="key-input"
                />
                <button type="submit" className="submit-button">Submit</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default KeyInput;