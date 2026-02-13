import React, { useRef, useEffect, useState } from "react";
import crashScreenshot from '../images/placeholder.avif';
import HRScreenshot from '../images/placeholder.avif';
import flusherScreenshot from '../images/placeholder.avif';
import ProjectBoxCarousel from "./ProjectBoxCarousel";

export default function ProjectsShowcase() {
  const screenshotRef = useRef(null);
  const boxRef = useRef(null);
  const [boxHeight, setBoxHeight] = useState(null);

  useEffect(() => {
    const img = screenshotRef.current;
    const box = boxRef.current;
    if (!img || !box) return;

    const syncHeight = () => {
      if (img.offsetHeight > 0) setBoxHeight(img.offsetHeight);
    };

    syncHeight();
    img.addEventListener('load', syncHeight);
    window.addEventListener('resize', syncHeight);
    return () => {
      img.removeEventListener('load', syncHeight);
      window.removeEventListener('resize', syncHeight);
    };
  }, []);

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
      <div className="projects-showcase-row">
        <div ref={boxRef} className="section-box section-box--narrow section-box--carousel" style={boxHeight != null ? { height: `${boxHeight}px`, minHeight: `${boxHeight}px` } : undefined}>
          <ProjectBoxCarousel slides={crashCourseSlides} />
        </div>
        <div className="project-screenshot-wrap">
          <img ref={screenshotRef} className="project-screenshot" src={crashScreenshot} alt="Crash Course" />
        </div>
      </div>
      <div className="projects-showcase-row">
        <div className="project-screenshot-wrap">
          <img ref={screenshotRef} className="project-screenshot" src={HRScreenshot} alt="Smoke Trajectory Prediction" />
        </div>
        <div ref={boxRef} className="section-box section-box--narrow section-box--carousel" style={boxHeight != null ? { height: `${boxHeight}px`, minHeight: `${boxHeight}px` } : undefined}>
          <ProjectBoxCarousel slides={HRSlides} />
        </div>
      </div>
      <div className="projects-showcase-row">
        <div ref={boxRef} className="section-box section-box--narrow section-box--carousel" style={boxHeight != null ? { height: `${boxHeight}px`, minHeight: `${boxHeight}px` } : undefined}>
          <ProjectBoxCarousel slides={flusherSlides} />
        </div>
        <div className="project-screenshot-wrap">
          <img ref={screenshotRef} className="project-screenshot" src={flusherScreenshot} alt="Flusher Finder" />
        </div>
      </div>
    </div>
  );
}