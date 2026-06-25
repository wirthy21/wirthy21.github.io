+++
title = "OpenClaw Agent 🦀"
date = 2026-06-25
draft = false
url = "/projects/openclaw_agent/"
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

<img class="project-medium-image" src="/images/projects/luna_chat.png" alt="OpenClaw Agent chat interface">

## Overview

By now, you have already learned quite a bit about Luna. Luna has become a valuable part of my everyday life, as she already supports me with simple assistance tasks. During the setup, security was especially important to me. I wanted to make sure that my agent is protected from external attacks, while my system is also protected from Luna herself.

For privacy reasons, I configured Luna according to the principle of least privilege. This means that Luna only has limited access to my personal data and restricted permissions — only the ones I explicitly grant her.

Luna is a tinkering project. Through the continuous development of new tools, I keep expanding Luna’s horizon, for example with Paperclip, which helps me gain a better overview of the orchestration of the agents.

## Current Tasks

* Self-updating, configuration, and deployment
* Birthday notifications with age calculation
* Job-search agent for PhD positions
* Fully automated print-on-demand uploader
* Cover letter generation using multiple subagents
* Multi-agent coding team with Codex

