import React, { useState, useEffect, useRef } from 'react';

function FunStuff({ fixed = false }) {
    const [opacity, setOpacity] = useState(0);
    const elRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const el = elRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            // Fade in as top of element moves from bottom of viewport to ~1/3 from top
            const fadeStart = viewportHeight;
            const fadeEnd = viewportHeight * 0.35;
            const next = Math.max(0, Math.min(1, 1 - (rect.top - fadeEnd) / (fadeStart - fadeEnd)));
            setOpacity(next);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerClass = fixed ? 'App-header' : 'App-header App-header--inline';

    return (
        <header
            ref={elRef}
            className={headerClass}
            style={{
                opacity,
                pointerEvents: 'none',
                transition: 'opacity 0.15s ease-out',
            }}
        >
            <span className="Welcome-logo">{'Fun Stuff'}</span>
        </header>
    );
}

export default FunStuff;