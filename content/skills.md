+++
title = 'Skills 🛠️'
draft = false
+++

<p class="skills-intro">
  Beyond grades and degrees, the skills developed along the way are just as important. This page gives a small overview of my technical skills, certifications, and languages.
</p>

<style>
.skills-intro {
  margin: 2rem 0 2.2rem 0;
  line-height: 1.65;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.8rem;
  margin: 2rem 0 1rem 0;
}

.skill-card {
  padding: 1.25rem 1.45rem;
  border: none;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.075);
  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.skill-card:hover {
  background: rgba(255, 255, 255, 0.115);
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
}

.skill-card h3 {
  margin: 0 0 1rem 0;
  font-size: 1.15rem;
  line-height: 1.35;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.skill-tag {
  font-size: 0.85rem;
  line-height: 1;
  padding: 0.5rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.09);
  opacity: 0.95;
}

.skill-list {
  margin: 0;
  padding-left: 1.2rem;
}

.skill-list li {
  margin-bottom: 0.55rem;
  line-height: 1.55;
}

@media (max-width: 750px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="skills-grid">

<div class="skill-card">
  <h3>Programming 👨🏼‍💻</h3>
  <div class="skill-tags">
    <span class="skill-tag">Python</span>
    <span class="skill-tag">R</span>
    <span class="skill-tag">SQL</span>
    <span class="skill-tag">C++</span>
    <span class="skill-tag">Linux</span>
  </div>
</div>

<div class="skill-card">
  <h3>Data Science & ML 🤖</h3>
  <div class="skill-tags">
    <span class="skill-tag">PyTorch</span>
    <span class="skill-tag">OpenCV</span>
    <span class="skill-tag">Scikit-learn</span>
    <span class="skill-tag">Gymnasium</span>
    <span class="skill-tag">SciPy</span>
    <span class="skill-tag">Smolagents</span>
  </div>
</div>

<div class="skill-card">
  <h3>Languages 🌍</h3>
  <ul class="skill-list">
    <li>German — native</li>
    <li>English — C1</li>
  </ul>
</div>

<div class="skill-card">
  <h3>Certifications 🏅</h3>
  <ul class="skill-list">
    <li>Hugging Face: Deep Reinforcement Learning</li>
    <li>Hugging Face: Fundamentals of LLMs</li>
    <li>Hugging Face: Fundamentals of Agents</li>
  </ul>
</div>

</div>
