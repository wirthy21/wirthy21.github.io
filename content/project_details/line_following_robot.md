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

One of my personal highlights during my master’s program was the course “Bio-Inspired Robotics”. The final examination was to build a robot that could autonomously follow a line using only video input.

<img class="project-small-image" src="/images/projects/robot.jpeg" alt="Line-following robot">

The fastest team received the best grade, while additional implemented features could further improve the final score. With a significant lead over the second group, our robot achieved the best performance. Since the project was a lot of fun, we also implemented all optional side tasks, including rubber duck detection, QR code reading, and traffic light detection while driving.

<img class="project-medium-image" src="/images/projects/exam_course_robot.jpeg" alt="Examination course">

The robot used a PID controller combined with real-time camera input to detect and follow a black line by identifying its centroid in the video feed.


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