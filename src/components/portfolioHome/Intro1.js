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
                <p>My name's Jacob Chan, and I hail from the San Francisco Bay Area. I’m a student at the University of Toronto pursuing a major in Computer Science with a focus on Artificial Intelligence, and a double minor in Statistics and Mathematics.</p>
<p>Music and coding are two of my passions, and I see a lot of similarities between them. Both feel like creative outlets where I get to build things from scratch, they take a ton of focus, and they’re extremely rewarding when everything finally comes together! </p>
<p>I find coding powerful, and the pace of technology is only getting faster. Right now, I’m all about learning both in the classroom and hopefully in a work environment, and I look forward to applying my skills in the real world.</p>
<p>Thanks for stopping by!</p>
                </div>
            </div>
        </div>
  );
}

export default Intro1;