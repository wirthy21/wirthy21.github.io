+++
title = 'Projects 👾'
draft = false
+++

<p class="projects-intro">
  On this page, I share a mix of academic and personal projects. They show what I have worked on during my studies, research, and also in my own time. Feel free to take a look at my projects and click on them to learn more.
</p>

<style>
.projects-intro {
  margin: 2rem 0 2.2rem 0;
  line-height: 1.65;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.8rem;
  margin: 2rem 0 1rem 0;
}

.project-card {
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

.project-card:hover {
  background: rgba(255, 255, 255, 0.115);
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
  text-decoration: none;
}

.project-text h3 {
  margin: 0 0 0.35rem 0;
  font-size: 1.15rem;
  line-height: 1.35;
}

.project-text h4 {
  margin: 0 0 0.8rem 0;
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.7;
  line-height: 1.4;
}

.project-text p {
  margin: 0 0 0.9rem 0;
  line-height: 1.65;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.8rem;
}

.project-tag {
  font-size: 0.78rem;
  line-height: 1;
  padding: 0.42rem 0.6rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.09);
  opacity: 0.9;
}

.project-image {
  width: 100%;
  aspect-ratio: 4 / 4;
  border-radius: 12px;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.08);
}

.project-image-placeholder {
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

@media (max-width: 750px) {
  .project-card {
    grid-template-columns: 1fr;
  }

  .project-image,
  .project-image-placeholder {
    max-height: 220px;
  }
}
</style>

<div class="projects-grid">


<a class="project-card" href="/project_details/openclaw_agent/">
  <div class="project-text">
    <h3>OpenClaw Agent</h3>
    <h4>Personal AI Assistant  - ongoing</h4>
    <p>
    </p>
    <div class="project-tags">
      <span class="project-tag">Agentic AI</span>
      <span class="project-tag">OpenClaw</span>
      <span class="project-tag">Linux</span>
      <span class="project-tag">Automation</span>
      <span class="project-tag">Agent Orchestration</span>
      <span class="project-tag">Paperclip</span>
    </div>
  </div>
  <img
    class="project-image"
    src="/images/projects/openclaw_img.png"
  />
</a>

<a class="project-card" href="/project_details/pod_automation/">
  <div class="project-text">
    <h3>Print-On-Demand Automation<br>Agentic AI Workflow </h3>
    <h4>Personal Agentic AI Project - ongoing</h4>
    <p>
    </p>
    <div class="project-tags">
      <span class="project-tag">AI Workflow</span>
      <span class="project-tag">Agentic Pipeline</span>
      <span class="project-tag">Codex CLI</span>
      <span class="project-tag">Vision Models</span>
      <span class="project-tag">Text Models</span>
      <span class="project-tag">Local Hosting</span>
    </div>
  </div>
  <img
    class="project-image"
    src="/images/projects/merch.png"
  />
</a>

<a class="project-card" href="/project_details/master_thesis/">
  <div class="project-text">
    <h3>Exploring Predator-Prey Dynamics from Videos using Generative Adversarial Imitation Learning</h3>
    <h4>Master’s Thesis - March, 2026</h4>
    <p>
    </p>
    <div class="project-tags">
    <span class="project-tag">Computer Vision</span>
    <span class="project-tag">Imitation Learning</span>
    <span class="project-tag">GAIL</span>
    <span class="project-tag">Self-Supervised Learning</span>
    <span class="project-tag">Explainable AI</span>
    <span class="project-tag">Autoencoder</span>
    </div>
  </div>
  <img
    class="project-image"
    src="/images/projects/yolo.png"
  />
</a>

<a class="project-card" href="/project_details/line_following_robot/">
  <div class="project-text">
    <h3>Line-Following Robot</h3>
    <h4>Student Project - March, 2026</h4>
    <p>
    </p>
    <div class="project-tags">
      <span class="project-tag">PID Controller</span>
      <span class="project-tag">Raspberry Pi</span>
      <span class="project-tag">Computer Vision</span>
      <span class="project-tag">Linux</span>
      <span class="project-tag">Self-Driving</span>
    </div>
  </div>
  <img
    class="project-image"
    src="/images/projects/robot.jpeg"
  />
</a>

<a class="project-card" href="/project_details/wikipedia_graph/">
  <div class="project-text">
    <h3>Shortest Path Analysis in the Wikipedia Graph: Machine Learning Approaches to Wikirace </h3>
    <h4>Student Project - January, 2025</h4>
    <p>
    </p>
    <div class="project-tags">
      <span class="project-tag">Wikipedia</span>
      <span class="project-tag">Graph Search</span>
      <span class="project-tag">WikiRace</span>
      <span class="project-tag">Networks</span>
    </div>
  </div>
  <img
    class="project-image"
    src="/images/projects/wiki.png"
  />
</a>


<a class="project-card" href="/project_details/discourse_climate_change/">
  <div class="project-text">
    <h3>Analyzing Online Discourse on Climate Change Using Word2Vec Embeddings</h3>
    <h4>Student Project - August, 2024</h4>
    <p>
    </p>
    <div class="project-tags">
      <span class="project-tag">Climate Change</span>
      <span class="project-tag">Word embeddings</span>
      <span class="project-tag">Skipgram</span>
      <span class="project-tag">CBOW</span>
    </div>
  </div>
  <img
    class="project-image"
    src="/images/projects/climate_change.png"
  />
</a>


<a class="project-card" href="/project_details/em_prediction/">
  <div class="project-text">
    <h3>Forecasting the UEFA EURO 2024:<br> Comparing FIFA23 and LLM Simulations</h3>
    <h4>Student Project - August, 2024</h4>
    <p>
    </p>
    <div class="project-tags">
      <span class="project-tag">EM Simulation</span>
      <span class="project-tag">Data Quality</span>
      <span class="project-tag">LLMs</span>
      <span class="project-tag">Quotes</span>
    </div>
  </div>
  <img
    class="project-image"
    src="/images/projects/fifa.jpg"
  />
</a>
</div>


<a class="project-card" href="/project_details/bbq_universe/">
  <div class="project-text">
    <h3>BBQ Universe - 445.000 Follower<br>Instagram Theme Page</h3>
    <h4>Personal Project - May, 2022</h4>
    <p>
    </p>
    <div class="project-tags">
      <span class="project-tag">Instagram</span>
      <span class="project-tag">Social Media</span>
      <span class="project-tag">Theme Page</span>
      <span class="project-tag">BBQ & Grill</span>
    </div>
  </div>
  <img
    class="project-image"
    src="/images/projects/bbq_universe.png"
  />
</a>
</div>