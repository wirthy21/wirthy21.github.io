+++
title = "Exploring Predator-Prey Dynamics from Videos using Generative Adversarial Imitation Learning"
draft = false
+++

<img class="project-hero-image" src="/images/projects/predator-prey.jpg" alt="Predator-prey trajectory analysis project">

## Overview

This project was conducted as my Master's thesis at the Max Planck Institute of Animal Behavior and the University of Konstanz. The goal was to explore predator-prey dynamics from video data using Computer Vision and Generative Adversarial Imitation Learning.

## Motivation

Predator-prey interactions are complex multi-agent systems. Instead of relying only on manually designed behavioral rules, this project investigated whether agent policies can learn basic motion patterns directly from observed trajectories.

## Methods

The project combined several components:

- Object detection using YOLO
- Multi-object tracking using DeepSORT
- Trajectory preprocessing
- Behavioral feature extraction
- Generative Adversarial Imitation Learning
- Multi-agent policy training

## Results

The final model was able to imitate basic behavioral motion patterns and was evaluated against expert trajectories using group-level behavioral metrics.

## Technologies

- Python
- PyTorch
- OpenCV
- YOLO
- DeepSORT
- Reinforcement Learning
- Imitation Learning
- Multi-Agent Systems