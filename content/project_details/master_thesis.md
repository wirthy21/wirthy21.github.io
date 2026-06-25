+++
title = "Exploring Predator-Prey Dynamics from Videos using Generative Adversarial Imitation Learning 🦈🐟"
draft = false
+++

<style>
.video-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  width: 80%;
  max-width: 600px;
  display: block;
  margin: 2rem auto;
  border-radius: 12px;
}

.project-large-image {
  width: 100%;
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

.cv-actions {
  margin: 2rem 0 1.5rem 0;
  text-align: center;
}

.cv-download {
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

.cv-download:hover {
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
  .project-medium-image,
  .project-large-image {
    width: 90%;
    max-width: 100%;
  }
}
</style>

<p class="abstract-text" lang="en"> Conducted within Research Group Li at the Cluster of Excellence Centre for the Advanced Study of Collective Behaviour and the Max Planck Institute of Animal Behavior. Together with the reseach group of Dr. Liang Li I conducted research to better understand swarm behavior of fish under survival pressure.</p>

<div class="cv-actions">
  <a class="cv-download" href="/files/Master_Thesis.pdf" download>
    Download Master-Thesis
  </a>
</div>


<img class="project-medium-image" src="/images/projects/gail.png" alt="GAIL">

<br>

## Abstract

<p class="abstract-text" lang="en">
Collective motion in swarm systems exhibits complex behavioral patterns emerging from local interactions and external influences. Learning policies that reproduce such dynamics remains challenging, especially in predator–prey settings where heterogeneous roles co-evolve competitively. This thesis investigates whether predator–prey behavior can be learned directly from real aquarium recordings of one predator and a school of prey. Expert trajectories are extracted using a customized detection and tracking pipeline and transformed into structured tensors. Separate modular policies for predator and prey are trained co-evolutionarily within a Generative Adversarial Imitation Learning framework using evolutionary strategies, with role specific discriminators operating on latent transition representations learned by a self supervised transition encoder. Performance is evaluated using swarm-level metrics, complemented by Monte-Carlo trajectory prediction to analyze uncertainty and policy visualizations to explain behavior in specific situations. Results show partial imitation: the learned policies reproduce basic group motion, but fail to capture inter-group dynamics such as consistently pursuit and coordinated avoidance. The thesis discusses causes, including data imbalance and architectural choices, and outlines directions to improve robust predator–prey imitation from videos.</p>

<div class="video-grid">
  <div class="video-card">
    <video controls>
      <source src="/images/projects/real.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <p>Aquarium Recordings</p>
  </div>

  <div class="video-card">
    <video controls>
      <source src="/images/projects/sim.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <p>Final Imitation</p>
  </div>
</div>


<br>

## Further Analysis

<p class="abstract-text" lang="en">
Furthermore analysis to better explain the learning of the policies are conducted. The heat maps show how the predator learned to perceive nearby prey. The trajectories are created based on a Monte-Carlo simulation to calculate the offset of the learned stochastic policies in comparison to a real recorded trajectory. And the Attention Graph shows which prey currently receives the highest predator attention.</p>

<img class="project-large-image" src="/images/projects/maps.png" alt="Heat Maps">

<p class="abstract-text" lang="en">
The trajectories are created based on a Monte-Carlo simulation to calculate the offset of the learned stochastic policies in comparison to a real recorded trajectory.</p>

<img class="project-large-image" src="/images/projects/traj.png" alt="Trajectory Prediction">

<p class="abstract-text" lang="en">
And the Attention Graph shows which prey currently receives the highest predator attention.</p>

<img class="project-large-image" src="/images/projects/network.png" alt="Attention Network">