document.addEventListener('DOMContentLoaded', function() {
    const keyInput = document.getElementById('key-input');
    const submitButton = document.getElementById('submit-button');
    const warningMessage = document.getElementById('warning-message');
    const loveLetterContainer = document.getElementById('love-letter-container');

    submitButton.addEventListener('click', function() {
        const inputValue = keyInput.value;
        if (validateDate(inputValue)) {
            warningMessage.style.display = 'none';
            loveLetterContainer.style.display = 'block';
            startLoveLetterAnimation();
        } else {
            alert('Invalid date format. Please enter a valid date (YYYY-MM-DD).');
        }
    });

    function validateDate(dateString) {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        return regex.test(dateString);
    }

    function startLoveLetterAnimation() {
        // Assuming love-letter.js handles the animation
        const loveLetterAnimation = new LoveLetterAnimation();
        loveLetterAnimation.open();
    }
});