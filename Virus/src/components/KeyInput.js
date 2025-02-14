import React, { useState } from 'react';

const KeyInput = ({ onUnlock }) => {
    const [dateInput, setDateInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        setDateInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const correctDate = '2023-10-01'; // Replace with the actual date you want to validate against

        if (dateInput === correctDate) {
            onUnlock();
        } else {
            setErrorMessage('Fecha incorrecta. Inténtalo de nuevo.');
        }
    };

    return (
        <div className="key-input-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="date-input">Introduce la fecha en la que se conocieron:</label>
                <input
                    type="date"
                    id="date-input"
                    value={dateInput}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Desbloquear</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default KeyInput;