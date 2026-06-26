+++
title = 'Curriculum Vitae 📑'
draft = false
+++

<style>
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

.cv-viewer {
  width: 100%;
  height: 1000px;
  border: none;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.075);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
}

@media (max-width: 700px) {
  .cv-viewer {
    height: 650px;
  }
}
</style>

<iframe
  class="cv-viewer"
  src="/files/CV_Jannik_Wirtheim.pdf"
  title="CV Jannik Wirtheim">
</iframe>

<div class="cv-actions">
  <a class="cv-download" href="/files/CV_Jannik_Wirtheim.pdf" download>
    Download CV
  </a>
</div>