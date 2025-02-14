const loveLetterAnimation = () => {
    const loveLetter = document.querySelector('.love-letter');
    const envelope = document.querySelector('.envelope');

    // Initial state
    loveLetter.style.transform = 'scale(0)';
    envelope.style.transform = 'translateY(100%)';

    // Animate envelope opening
    setTimeout(() => {
        envelope.style.transition = 'transform 0.5s ease-in-out';
        envelope.style.transform = 'translateY(0)';
    }, 500);

    // Animate love letter appearing
    setTimeout(() => {
        loveLetter.style.transition = 'transform 0.5s ease-in-out';
        loveLetter.style.transform = 'scale(1)';
    }, 1000);
};

// Export the animation function
export default loveLetterAnimation;