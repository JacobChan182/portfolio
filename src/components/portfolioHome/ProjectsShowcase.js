import React, { useRef, useEffect, useState } from "react";
import crashScreenshot from '../images/crashScreenshot.png';
import HRScreenshot from '../images/HRScreenshot.png';
import flusherScreenshot from '../images/flusherScreenshot.png';
import ProjectBoxCarousel from "./ProjectBoxCarousel";

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
  const [visibleRows, setVisibleRows] = useState([false, false, false]);

  useEffect(() => {
    const observers = rowRefs.map((ref, i) => {
      const el = ref.current;
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          setVisibleRows((prev) => {
            const next = [...prev];
            next[i] = entry.isIntersecting;
            return next;
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  // eslint-disable-next-line react-hooks/exhaustive-deps -- rowRefs is derived from stable refs
  }, [rowRef0, rowRef1, rowRef2]);

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
    <div><h3 key="title">Flusher Finder - NewHacks 25</h3> <p key="description">24-hour Hackathon Project that helps users with IBS and other conditions rate and locate accessible and clean restrooms nearby</p></div>,
    <p key="p1">React, FastAPI, PostgreSQL, Google Maps API</p>,
  ];

  return (
    <div className="section">
      <h1>My Projects</h1>
      <div ref={rowRef0} className={`projects-showcase-row ${visibleRows[0] ? "projects-showcase-row--visible" : ""}`}>
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
      <div ref={rowRef1} className={`projects-showcase-row ${visibleRows[1] ? "projects-showcase-row--visible" : ""}`}>
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
      <div ref={rowRef2} className={`projects-showcase-row ${visibleRows[2] ? "projects-showcase-row--visible" : ""}`}>
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