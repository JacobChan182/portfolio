import React, { useState, useEffect, useRef } from 'react';
import logo from '../images/jclogo.png';

function Welcome() {
    const [isVisible, setIsVisible] = useState(true);
    const hasScrolledPast = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            
            // If scrolling down past a threshold, hide the hero
            if (scrollY > 100 && !hasScrolledPast.current) {
                setIsVisible(false);
                hasScrolledPast.current = true;
            }
        };

        const handleKeyDown = (event) => {
            // If up arrow is pressed and we've scrolled past, show the hero and scroll to top
            if (event.key === 'ArrowUp' && hasScrolledPast.current) {
                event.preventDefault();
                setIsVisible(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                // Reset the flag after scrolling to top completes
                setTimeout(() => {
                    hasScrolledPast.current = false;
                }, 600);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <header 
            className="App-header"
            style={{
                opacity: isVisible ? 1 : 0,
                pointerEvents: 'none',
                transition: 'opacity 0.5s ease-out',
            }}
        >
            <img 
                src={logo} 
                className="App-logo" 
                alt="logo" 
                style={{ 
                    width: "800px", 
                    height: "auto"
                }}
            />
        </header>
    );
}

export default Welcome;