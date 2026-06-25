+++
title = 'Publications 📝'
draft = false
+++

<p class="publications-intro">
  Here you can find an overview of my current and upcoming academic work and publications.
</p>

<style>
.publications-intro {
  margin: 2rem 0 2.2rem 0;
  line-height: 1.65;
}

.publications-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.8rem;
  margin: 2rem 0 1rem 0;
}

.publication-card {
  display: grid;
  grid-template-columns: 1fr 180px;
  gap: 1.4rem;
  align-items: center;
  padding: 1.25rem 1.45rem;
  border: none;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.075);
  color: inherit;
  text-decoration: none;
  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.publication-card:hover {
  background: rgba(255, 255, 255, 0.115);
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
  text-decoration: none;
}

.publication-text h3 {
  margin: 0 0 0.35rem 0;
  font-size: 1.15rem;
  line-height: 1.35;
}

.publication-text h4 {
  margin: 0 0 0.8rem 0;
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.7;
  line-height: 1.4;
}

.publication-text p {
  margin: 0 0 0.9rem 0;
  line-height: 1.65;
}

.publication-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.8rem;
}

.publication-tag {
  font-size: 0.78rem;
  line-height: 1;
  padding: 0.42rem 0.6rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.09);
  opacity: 0.9;
}

.publication-status {
  display: inline-block;
  margin-bottom: 0.75rem;
  font-size: 0.78rem;
  line-height: 1;
  padding: 0.45rem 0.65rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.13);
  opacity: 0.95;
}

.publication-image-placeholder {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  font-size: 0.85rem;
  opacity: 0.65;
}

.publication-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.08);
}

@media (max-width: 750px) {
  .publication-card {
    grid-template-columns: 1fr;
  }

  .publication-image,
  .publication-image-placeholder {
    max-height: 220px;
  }
}
</style>

<div class="publications-grid">

<a class="publication-card" href="/publications/predator-prey-gail-paper/">
  <div class="publication-text">
    <span class="publication-status">Paper in progress</span>
    <h3>Exploring Predator-Prey Dynamics from Videos using Generative Adversarial Imitation Learning</h3>
    <h4>Working paper for ICRA 2027, South Korea</h4>
    <p>
      This work learns predator–prey swarm behavior from aquarium videos using a GAIL-based co-evolutionary framework. The learned policies reproduce basic group motion, but only partially capture pursuit and avoidance dynamics.
    </p>
    <div class="publication-tags">
      <span class="publication-tag">Working Paper</span>
      <span class="publication-tag">Computer Vision</span>
      <span class="publication-tag">Imitation Learning</span>
      <span class="publication-tag">Multi-Agent Systems</span>
      <span class="publication-tag">GAIL</span>
      <span class="publication-tag">Self-Supervised Learning</span>
    </div>
  </div>
  <img
    class="project-image"
    src="/images/projects/gail.png"
    alt="Predator-prey trajectory analysis project"
  />
</a>

</div>