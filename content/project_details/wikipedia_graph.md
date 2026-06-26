+++
title = "Shortest Path Analysis in the Wikipedia Graph: Machine Learning Approaches to Wikirace 🌐"
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

## The Game

<p class="abstract-text" lang="en">WikiRace is a game where players start on one Wikipedia article and try to reach a specific target article by only clicking links within Wikipedia. The goal is to find the shortest or fastest path, which makes the game a mix of knowledge, strategy, and quick navigation.</p>

<img class="project-medium-image" src="/images/projects/wiki_race2.png" alt="WikiRace">

<br>

## The Project

<p class="abstract-text" lang="en">I wanted to investigate how well different machine learning algorithms can predict shortest path distances in the Wikipedia hyperlink network. Inspired by the WikiRace game, the task was framed as a classification problem: given two Wikipedia articles, the model should estimate how many clicks are needed to get from one article to the other.</p>


<p class="abstract-text" lang="en">For this, I constructed a directed graph with around 4.5 million nodes based on a dataset containing 1.6 billion hyperlink relations. Using graph-based features, I trained and compared different machine learning models, including KNN, XGBoost, and a Multi-Layer Perceptron (MLP). The best model achieved an accuracy of up to 53%, compared to a random baseline of 27%. Overall, XGBoost performed best, while the MLP approach did not provide a clear advantage for this task.</p>


<img class="project-medium-image" src="/images/projects/wiki.png" alt="WikiGraph">


<div class="github-actions">
  <a class="github-button" href="https://github.com/wirthy21/WDCSS" target="_blank" rel="noopener noreferrer">
    View Project on GitHub
  </a>
</div>