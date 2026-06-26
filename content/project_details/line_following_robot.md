+++
title = "Line-Following Robot 🏎️🥇"
draft = false
+++

<style>
.video-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  margin: 2rem 0;
}

.video-card video {
  width: 100%;
  border-radius: 12px;
  display: block;
}

.video-card p {
  margin-top: 0.6rem;
  text-align: center;
  font-size: 0.95rem;
  opacity: 0.85;
  line-height: 1.4;
}

.project-small-image {
  width: 45%;
  max-width: 420px;
  display: block;
  margin: 2rem auto;
  border-radius: 12px;
}

.project-medium-image {
  width: 60%;
  max-width: 600px;
  display: block;
  margin: 2rem auto;
  border-radius: 12px;
}

.abstract-text {
  text-align: justify;
  hyphens: auto;
  line-height: 1.65;
}

.github-actions {
  margin: 2.5rem 0 1rem 0;
  text-align: center;
}

.github-button {
  display: inline-block;
  padding: 0.75rem 1.15rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.09);
  color: inherit;
  text-decoration: none;
  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.github-button::after {
  content: none !important;
}

.github-button:hover {
  background: rgba(255, 255, 255, 0.14);
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
  text-decoration: none;
}

@media (max-width: 900px) {
  .video-grid {
    grid-template-columns: 1fr;
  }

  .project-small-image,
  .project-medium-image {
    width: 90%;
    max-width: 100%;
  }
}
</style>

## Overview

<p class="abstract-text" lang="en">
One of my personal highlights during my master’s program was the course “Bio-Inspired Robotics”. The final examination was to build a robot that could autonomously follow a line using only video input.</p>


<img class="project-small-image" src="/images/projects/robot.jpeg" alt="Line-following robot">

<p class="abstract-text" lang="en">
The fastest team received the best grade, while additional implemented features could further improve the final score. With a significant lead over the second group, our robot achieved the best performance. Since the project was a lot of fun, we also implemented all optional side tasks, including rubber duck detection, QR code reading, and traffic light detection while driving.</p>

<img class="project-medium-image" src="/images/projects/exam_course_robot.jpeg" alt="Examination course">

<p class="abstract-text" lang="en">
The robot used a PID controller combined with real-time camera input to detect and follow a black line by identifying its centroid in the video feed.</p>


<div class="video-grid">
  <div class="video-card">
    <video controls muted playsinline>
      <source src="/images/projects/training_video3.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <p>First autonomous test run</p>
  </div>

  <div class="video-card">
    <video controls muted playsinline>
      <source src="/images/projects/training_video2.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <p>Handling curves on the track</p>
  </div>

  <div class="video-card">
    <video controls muted playsinline>
      <source src="/images/projects/training_video1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <p>Rubber duck detection</p>
  </div>
</div>


<div class="github-actions">
  <a class="github-button" href="https://github.com/wirthy21/Robotics" target="_blank" rel="noopener noreferrer">
    View Project on GitHub
  </a>
</div>