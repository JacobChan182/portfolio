import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Intro1() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const row = sectionRef.current;
    if (!row) return;
    const heading = headingRef.current;
    const box = boxRef.current;
    if (!heading || !box) return;

    const t1 = gsap.fromTo(heading, { opacity: 0, x: -60 }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: row,
        start: 'top 85%',
        end: 'top 35%',
        scrub: 1,
      },
    });
    const t2 = gsap.fromTo(box, { opacity: 0, x: 60 }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: row,
        start: 'top 85%',
        end: 'top 35%',
        scrub: 1,
      },
    });

    return () => {
      t1.scrollTrigger?.kill();
      t2.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div ref={sectionRef} className="section">
      <h1 ref={headingRef}>About Me</h1>
      <div ref={boxRef} className="section-box">
                <div>
                <p>My name is Jacob Chan and I'm from the San Francisco Bay Area. I'm currently a student at the University of Toronto pursuing a major in Computer Science and a double minor in Statistics and Mathematics.</p>
<p>Music and coding are two of my passions, and I see a lot of similarities between them. Both feel like creative outlets where I get to build things from scratch. They take a ton of focus, and are extremely rewarding when everything finally comes together. </p>
<p> Right now, I’m all about learning, both in and out of the classroom, and I look forward to applying my skills to a real-world, large-scale environment.</p>
<p>Thanks for stopping by!</p>
                </div>
            </div>
        </div>
  );
}

export default Intro1;