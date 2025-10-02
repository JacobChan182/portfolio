import React, { useRef, useState } from "react";
import Welcome from './Welcome';
import Intro1 from './Intro1';
import Intro2 from './Intro2';
import Intro3 from './Intro3';
import Intro4 from './Intro4';

const sections = [
  <Welcome key="welcome" />,
  <Intro1 key="intro1" />,
  <Intro2 key="intro2" />,
  <Intro3 key="intro3" />,
  <Intro4 key="intro4" />
];

export default function FullPageScroll() {
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const isScrolling = useRef(false);

  const handleWheel = (e) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    if (e.deltaY > 0 && current < sections.length - 1) {
      setCurrent((prev) => prev + 1);
    } else if (e.deltaY < 0 && current > 0) {
      setCurrent((prev) => prev - 1);
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 800); // debounce time (ms)
  };

  React.useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    node.addEventListener("wheel", handleWheel, { passive: false });
    return () => node.removeEventListener("wheel", handleWheel);
    // eslint-disable-next-line
  }, [current]);

  React.useEffect(() => {
    containerRef.current.scrollTo({
      top: current * window.innerHeight,
      behavior: "smooth",
    });
  }, [current]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        overflow: "hidden",
        scrollBehavior: "smooth",
      }}
    >
      <div style={{ height: `${sections.length * 100}vh` }}>
        {sections.map((Section, idx) => (
          <div
            key={idx}
            style={{
              height: "100vh",
              width: "100vw",
              scrollSnapAlign: "start",
            }}
          >
            {Section}
          </div>
        ))}
      </div>
    </div>
  );
}