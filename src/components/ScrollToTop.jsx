import React, { useState, useEffect } from 'react';
import { PiArrowFatUpFill } from 'react-icons/pi';

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true); // Show button after scrolling 300px
            } else {
                setShowButton(false); // Hide button if near the top
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll effect
        });
    };

    return (
        <>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className='fixed bottom-8  right-8 p-3 rounded-xl bg-gradient-to-bl from-neutral-50 to-blue-100 text-blue-900 shadow-lg hover:scale-110 transition-all duration-300 ease-in-out'
                >
                    <PiArrowFatUpFill />
                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;
