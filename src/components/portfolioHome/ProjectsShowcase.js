import React, { useRef, useEffect, useState } from "react";
import screenshot from '../images/placeholder.avif';

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

  return (
    <div className="section">
      <h1>My Projects</h1>
      <div className="projects-showcase-row">
        <div ref={boxRef} className="section-box section-box--narrow" style={boxHeight != null ? { height: `${boxHeight}px`, minHeight: `${boxHeight}px` } : undefined}>
          <p><h3>Crash Course - React Native, Firebase, Firestore</h3></p>
          <p>Crash Course is a cross-platform application, built for drummers of all skill levels to learn and practice their rudiments</p>
        </div>
        <div className="project-screenshot-wrap">
          <img ref={screenshotRef} className="project-screenshot" src={screenshot} alt="Crash Course" />
        </div>
      </div>
      <div className="section-box">
        <p><b>Smoke Trajectory Prediction (In Progress)</b></p>
        <p>A tool for Counter-Strike that allows players to discover new smoke-grenade lineups by simulating the game's physics</p>
      </div>
      <div className="section-box">
        <p><b>Flusher Finder (24-hour Hackathon Project)</b></p>
        <p>A tool for locating and managing flushable items in Minecraft - Built at my first Hackathon, <a href="https://github.com/JacobChan182/FlusherFinder">Newhacks25</a>, this app helps users with IBS and other conditions rate and locate accessible and clean restrooms nearby</p>
      </div>
    </div>
  );
}