import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import crashScreenshot from '../assets/images/crashScreenshot.png';
import HRScreenshot from '../assets/images/HRScreenshot.png';
import flusherScreenshot from '../assets/images/flusherScreenshot.png';
import ProjectBoxCarousel from "./ProjectBoxCarousel";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsShowcase() {
  const screenshotRef0 = useRef(null);
  const screenshotRef1 = useRef(null);
  const screenshotRef2 = useRef(null);
  const screenshotRefs = [screenshotRef0, screenshotRef1, screenshotRef2];
  const rowRef0 = useRef(null);
  const rowRef1 = useRef(null);
  const rowRef2 = useRef(null);
  const rowRefs = [rowRef0, rowRef1, rowRef2];
  const [heights, setHeights] = useState([null, null, null]);

  useEffect(() => {
    const scrollTriggers = [];
    rowRefs.forEach((ref) => {
      const row = ref.current;
      if (!row) return;
      const first = row.firstElementChild;
      const last = row.lastElementChild;
      if (!first || !last) return;
      const isSingleChild = first === last;
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
      scrollTriggers.push(t1.scrollTrigger);
      if (!isSingleChild) {
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
        scrollTriggers.push(t2.scrollTrigger);
      }
    });
    return () => scrollTriggers.forEach((st) => st?.kill());
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount; row refs are stable
  }, []);

  useEffect(() => {
    const syncHeights = () => {
      setHeights((prev) =>
        screenshotRefs.map((ref, i) => {
          const img = ref.current;
          return img && img.offsetHeight > 0 ? img.offsetHeight : prev[i];
        })
      );
    };
    syncHeights();
    screenshotRefs.forEach((ref) => {
      const img = ref.current;
      if (img) img.addEventListener("load", syncHeights);
    });
    window.addEventListener("resize", syncHeights);
    return () => {
      screenshotRefs.forEach((ref) => {
        const img = ref.current;
        if (img) img.removeEventListener("load", syncHeights);
      });
      window.removeEventListener("resize", syncHeights);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps -- screenshotRefs is derived from stable refs, refs don't change
  }, [screenshotRef0, screenshotRef1, screenshotRef2]);

  const crashCourseSlides = [
    <div><h3 key="title">Crash Course - Side Project</h3> <p key="description">Cross-platform application, built for drummers of all skill levels to learn and practice their rudiments</p></div>,
    <p key="p1">React Native, Firebase, Firestore</p>,
  ];

  const HRSlides = [
    <div><h3 key="title">HiReady Continued - UoftHacks 13</h3> <p key="description">AI-powered corporate training application that detects trainees learning friction in videos and give trainers actionable insights</p></div>,
    <p key="p1"> React, Node, Flask, Twelve Labs, Backboard.io, R2</p>,
  ];

  const flusherSlides = [
    <div><h3 key="title">Flusher Finder - NewHacks 25</h3> <p key="description">First full-stack project, built to help users with IBS and other conditions rate and locate accessible and clean restrooms nearby</p></div>,
    <p key="p1">React, FastAPI, PostgreSQL, Google Maps API</p>,
  ];

  return (
    <div className="section">
      <h1>My Projects</h1>
      <div ref={rowRef0} className="projects-showcase-row">
        <div
          className="section-box section-box--narrow section-box--carousel"
          style={heights[0] != null ? { maxHeight: heights[0] } : undefined}
        >
          <ProjectBoxCarousel slides={crashCourseSlides} />
        </div>
        <div className="project-screenshot-wrap">
          <a target="_blank" rel="noopener noreferrer" href="http://crash-course-19cb4.web.app/" className="project-screenshot-link">
            <img ref={screenshotRefs[0]} className="project-screenshot" src={crashScreenshot} alt="Crash Course" />
          </a>
        </div>
      </div>
      <div ref={rowRef1} className="projects-showcase-row projects-showcase-row--hr">
        <div className="project-screenshot-wrap">
          <a target="_blank" rel="noopener noreferrer"href="http://hi-ready-continued.vercel.app" className="project-screenshot-link">
            <img ref={screenshotRefs[1]} className="project-screenshot" src={HRScreenshot} alt="HiReady Continued" />
          </a>
        </div>
        <div
          className="section-box section-box--narrow section-box--carousel"
          style={heights[1] != null ? { maxHeight: heights[1] } : undefined}
        >
          <ProjectBoxCarousel slides={HRSlides} />
        </div>
      </div>
      <div ref={rowRef2} className="projects-showcase-row">
        <div
          className="section-box section-box--narrow section-box--carousel"
          style={heights[2] != null ? { maxHeight: heights[2] } : undefined}
        >
          <ProjectBoxCarousel slides={flusherSlides} />
        </div>
        <div className="project-screenshot-wrap">
          <a target="_blank" rel="noopener noreferrer" href="http://flusherfinder.web.app" className="project-screenshot-link">
            <img ref={screenshotRefs[2]} className="project-screenshot" src={flusherScreenshot} alt="Flusher Finder" />
          </a>
        </div>
      </div>
    </div>
  );
}