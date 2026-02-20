import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChanocasterViewer from './ChanocasterViewer';
import guitar1 from '../assets/images/guitar/IMG_22892.jpg';
import guitar2 from '../assets/images/guitar/IMG_2175.jpg';
import guitar3 from '../assets/images/guitar/IMG_2178.jpg';

gsap.registerPlugin(ScrollTrigger);

function Intro2() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const rowRef = useRef(null);
  const paragraphRef = useRef(null);
  const guitarImagesRef = useRef(null);

  useEffect(() => {
    const triggers = [];

    const section = sectionRef.current;
    const heading = headingRef.current;
    if (section && heading) {
      const t = gsap.fromTo(heading, { opacity: 0, x: -60 }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'top 35%',
          scrub: 1,
        },
      });
      triggers.push(t.scrollTrigger);
    }

    const row = rowRef.current;
    if (row) {
      const first = row.firstElementChild;
      const last = row.lastElementChild;
      if (first) {
        const t1 = gsap.fromTo(first, { opacity: 0, x: -60 }, {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            end: 'top 35%',
            scrub: 1,
          },
        });
        triggers.push(t1.scrollTrigger);
      }
      if (last && last !== first) {
        const t2 = gsap.fromTo(last, { opacity: 0, x: 60 }, {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            end: 'top 35%',
            scrub: 1,
          },
        });
        triggers.push(t2.scrollTrigger);
      }
    }

    const paragraph = paragraphRef.current;
    if (paragraph) {
      const t = gsap.fromTo(paragraph, { opacity: 0, y: 40 }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: paragraph,
          start: 'top 88%',
          end: 'top 50%',
          scrub: 1,
        },
      });
      triggers.push(t.scrollTrigger);
    }

    const guitarImages = guitarImagesRef.current;
    if (guitarImages) {
      const t = gsap.fromTo(guitarImages, { opacity: 0, y: 40 }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: guitarImages,
          start: 'top 88%',
          end: 'top 50%',
          scrub: 1,
        },
      });
      triggers.push(t.scrollTrigger);
    }

    return () => triggers.forEach((st) => st?.kill());
  }, []);

  return (
    <div ref={sectionRef} className="section">
      <h1 ref={headingRef}>Music</h1>
      <div ref={rowRef} className="intro2-row">
        <div className="intro2-left section-box">
            <h2>The Blink-650 Chanocaster</h2>
            <ul>
                <li>Modified Squier Sonic Flash Pink Hardtail</li>
                <li>Seymour Duncan SH-8 Invader Pickup</li>
                <li>Treble Bleed Circuitry</li>
                <li>Shiny Pearloid Pickguard</li>
                <li>Ernie Ball Skinny Top Heavy Bottom Slinky Strings</li>
            </ul>
        </div>
        <div className="intro2-right section-box">
          <ChanocasterViewer />
        </div>
      </div>
      <div ref={paragraphRef} className="section-box">
      I'm a huge fan of 2000s pop punk music, and my passion for building things bled into my fascination of the late Jerry Finn's music production techniques in Blink-182's <i>Enema of the State</i>. In addition to learning some of his production techniques, I built a low-budget replica of Tom Delonge's Signature Stratocaster to help reach maximum authenticity. Today, I'm proud to present to you the Blink-650 Chanocaster!

      </div>
      <div ref={guitarImagesRef} className="guitar-images">
        <img src={guitar3} alt="Chanocaster guitar" />
        <img src={guitar2} alt="Chanocaster guitar" />
        <div className="guitar-img-1-wrap">
          <img src={guitar1} alt="Chanocaster guitar" className="guitar-img-1" />
        </div>
      </div>
    </div>
  );
}

export default Intro2;