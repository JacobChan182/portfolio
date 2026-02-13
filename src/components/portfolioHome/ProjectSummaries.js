import React from "react";
import screenshot from '../images/placeholder.avif';

export default function ProjectsShowcase() {
  return (
    <div className="section">
      <h1>My Projects</h1> 
      <div className="section-box">
        <p><h3>Crash Course - React Native, Firebase, Firestore</h3></p>
        <div className="project-screenshot-wrap">
          <img className="project-screenshot" src={screenshot} alt="Crash Course" />
        </div>
        <p>Crash Course is a cross-platform application, built for drummers of all skill levels to learn and practice their rudiments</p>
        <p>Current features include:</p>
        <ul>
          <li>A library of rudiments that users can learn and practice with the metroome tool</li>
          <li>Sliding visual representation of sticking patterns à la Guitar Hero</li>
          <li>Customizable metronome settings (BPM, Metronome type, etc.)</li>
          <li>Hardware delay compensationcontrols for smoothness across all devices</li>
        </ul>
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