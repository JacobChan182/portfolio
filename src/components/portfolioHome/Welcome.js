import React, { useState, useEffect } from 'react';
import logo from '../images/jclogo.png';

const FADE_START = 0;
const FADE_END = 400; // px scrolled over which logo fades from 1 to 0

function Welcome({ fixed = false }) {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const next = Math.max(0, 1 - (scrollY - FADE_START) / (FADE_END - FADE_START));
            setOpacity(next);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // set initial opacity
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerClass = fixed ? 'App-header' : 'App-header App-header--inline';

    return (
        <header 
            className={headerClass}
            style={{
                opacity,
                pointerEvents: 'none',
                transition: 'opacity 0.15s ease-out',
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