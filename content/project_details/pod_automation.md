+++
title = "Print-On-Demand Agentic Upload Automation 🤖"
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
  width: 100%;
  max-width: 1200px;
  display: block;
  margin: 2rem auto;
  border-radius: 12px;
}

.abstract-text {
  text-align: justify;
  hyphens: auto;
  line-height: 1.65;
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

<p class="abstract-text" lang="en"> Print-On-Demand (POD) is a business model where products such as shirts, mugs, or posters are only produced after a customer places an order. This allows creators to sell custom designs online without holding inventory, managing storage, or handling production themselves.</p>

## The Business Model

<p class="abstract-text" lang="en">A few years ago, I came across the POD business model and was fascinated by the idea of publishing designs once and earning royalties passively whenever they are sold. I purchased a Vexels lifetime license, which allows me to create and download designs with a commercial license for selling them on different marketplaces.</p>

<img class="project-medium-image" src="/images/projects/shirt_example.png" alt="Shirt Example">

<p class="abstract-text" lang="en">Over time, my designs have been sold on multiple platforms and marketplaces around the world. However, publishing designs at scale involves a considerable amount of repetitive work. Each listing requires a catchy title, a precise and valuable description, and well-performing keywords. In addition, manually uploading designs to the platforms is a tedious and time-consuming process.</p>

## Automation Workflow

<p class="abstract-text" lang="en"> To automate the overall process, I created an AI-powered workflow that combines multiple models with my OpenClaw agent Luna. After the designs are created and downloaded from Vexels, a locally running Qwen2.5 Vision model generates a detailed description of each design. Since the model runs locally, it helps reduce API usage while still providing structured visual understanding of the design content.
</p>

<p class="abstract-text" lang="en"> These design descriptions are then passed through Codex to ChatGPT 5.5, which generates the final marketplace listings in JSON format. Each listing includes a title, description, keywords, and additional metadata such as whether the design is kid-friendly or should be treated as mature content.
</p>

<p class="abstract-text" lang="en"> The generated listings are then used by an AutoHotkey-based browser automation to upload the designs to different POD platforms. This includes filling in titles, descriptions, tags, colors, and content settings automatically.
</p>

<p class="abstract-text" lang="en"> The entire workflow is orchestrated by Luna. Once a day, my assistant starts the upload process, monitors the pipeline, and provides updates if something happens or when the task is completed.
</p>

<img class="project-medium-image" src="/images/projects/pod_pipeline.png" alt="Shirt Example">

<p class="abstract-text" lang="en"> In the future, the design creation process itself will also be automated through specialized subagents controlled by Luna. One agent could research emerging design trends, another could create new design ideas, and a third could evaluate them before they enter the publishing pipeline.
</p>