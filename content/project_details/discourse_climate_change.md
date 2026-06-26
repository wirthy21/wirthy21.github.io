+++
title = "Analyzing Climate Change Disclosure 🌍"
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

.abstract-text {
  text-align: justify;
  hyphens: auto;
  line-height: 1.65;
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

<p class="abstract-text" lang="en">
In this project, we investigated how online discussions about climate change evolved on Reddit between 2010 and 2022. The goal was to analyze whether the meaning of climate-related terms changed over time, how the main discussion topics shifted, and whether climate change discussions became less scientific.
</p>

<img class="project-large-image" src="/images/projects/word_cloud.png" alt="OpenClaw Agent chat interface">

<p class="abstract-text" lang="en">
<br>For this, we used a Reddit climate change dataset and trained Word2Vec-based embedding models on the processed text corpus. We compared CBOW and Skip-Gram architectures and selected CBOW due to its better performance and computational efficiency. Using the learned word embeddings, we analyzed semantic relationships between climate-related terms and visualized them with PCA.
</p>

<img class="project-large-image" src="/images/projects/embed.png" alt="OpenClaw Agent chat interface">

<p class="abstract-text" lang="en">
<br>In addition, we applied topic modeling to identify how the main themes in climate change discussions changed over time. The results suggested a shift from scientific reporting toward climate action, global leadership, and political discourse. We also compared scientific and non-scientific subreddit discussions to explore whether climate change discourse became less scientifically rigorous over time.
</p>

<img class="project-large-image" src="/images/projects/topics.png" alt="OpenClaw Agent chat interface">

<div class="github-actions">
  <a class="github-button" href="https://github.com/wirthy21/dlss-project24" target="_blank" rel="noopener noreferrer">
    View Project on GitHub
  </a>
</div>