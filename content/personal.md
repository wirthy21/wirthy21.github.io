+++
title = 'Personal 👦🏼'
draft = false
+++

<p class="personal-intro">
  Besides work and research, there are a few personal interests that shape who I am. Here, you can find a small insight into the activities that are important to me outside my academic life.
</p>

<style>
.personal-intro {
  margin: 2rem 0 2.2rem 0;
  line-height: 1.65;
}

.personal-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.8rem;
  margin: 2rem 0 1rem 0;
}

.personal-card {
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

.personal-card:hover {
  background: rgba(255, 255, 255, 0.115);
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
}

.personal-text h3 {
  margin: 0 0 0.35rem 0;
  font-size: 1.2rem;
  line-height: 1.35;
}

.personal-text h4 {
  margin: 0 0 0.8rem 0;
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.7;
  line-height: 1.4;
}

.personal-text p {
  margin: 0;
  line-height: 1.65;
}

.personal-image {
  width: 100%;
  aspect-ratio: 4 / 4;
  border-radius: 12px;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.08);
}

@media (max-width: 750px) {
  .personal-card {
    grid-template-columns: 1fr;
  }

  .personal-image {
    max-height: 220px;
  }
}
</style>

<div class="personal-grid">

  <div class="personal-card">
    <div class="personal-text">
      <h3>Diver</h3>
      <h4>Scuba Diving</h4>
      <p>
        During the first year of my master's programm in Constance. I did my international scuba diving license. 
      </p>
    </div>
    <img
      class="personal-image"
      src="/images/projects/diving.jpeg"
      alt="Diving"
    />
  </div>

  <div class="personal-card">
    <div class="personal-text">
      <h3>Triathlete</h3>
      <h4>Swimming · Cycling · Running</h4>
      <p>
        Triathlon is one of my main personal challenges. This year, I finished my first middle-distance triathlon, swimming 1.9 km, cycling 83.0 km, and running 21.1 km.
      </p>
    </div>
    <img
      class="personal-image"
      src="/images/projects/triathlon.jpeg"
      alt="Triathlon"
    />
  </div>

  <div class="personal-card">
    <div class="personal-text">
      <h3>Football Player</h3>
      <h4>Sportfreunde Bühlerzell e.V.</h4>
      <p>
        Football is an important part of my life. I have been playing it for as long as I can remember.
      </p>
    </div>
    <img
      class="personal-image"
      src="/images/projects/football.png"
      alt="Football"
    />
  </div>

</div>