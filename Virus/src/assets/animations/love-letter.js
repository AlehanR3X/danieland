const loveLetterAnimation = () => {
    const letter = document.querySelector('.love-letter');
    const envelope = document.querySelector('.envelope');

    // Initial state
    gsap.set(letter, { scale: 0, opacity: 0 });
    gsap.set(envelope, { scale: 1 });

    // Animation sequence
    gsap.to(envelope, {
        scale: 0.8,
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: () => {
            gsap.to(envelope, {
                scale: 1,
                duration: 0.5,
                ease: "power1.inOut",
                onComplete: () => {
                    gsap.to(letter, {
                        scale: 1,
                        opacity: 1,
                        duration: 1,
                        ease: "power1.out"
                    });
                }
            });
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    loveLetterAnimation();
});