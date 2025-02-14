document.addEventListener('DOMContentLoaded', () => {
    const keyInput = document.getElementById('key-input');
    const unlockButton = document.getElementById('unlock-button');
    const warningMessage = document.getElementById('warning-message');
    const loveLetter = document.getElementById('love-letter');

    unlockButton.addEventListener('click', () => {
        const enteredDate = keyInput.value;
        const correctDate = '2023-01-01'; // Replace with the actual date you want to validate

        if (enteredDate === correctDate) {
            warningMessage.style.display = 'none';
            animateLoveLetter();
        } else {
            alert('Fecha incorrecta. Inténtalo de nuevo.');
        }
    });

    function animateLoveLetter() {
        loveLetter.classList.add('open');
        // Additional GSAP or animation logic can be added here
    }
});