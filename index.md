---
layout: home
---

<div class="hero">
  <div class="grid grid-pad">
    <div class="hero-image">
      {% include_relative img/logo-hero.svg %}
    </div>
    <h1 class="hero-title"><strong>Homo&nbsp;Journalius</strong><br/>kijkt met grote ogen naar Het&nbsp;Journaal</h1>
  </div>
</div>

<div class="container-fluid">

<div class="col-sm-4">
  <div class="highlight">
    <a class="highlight-link" href="fragmenten.html">
      <em class="highlight-big number">{{ site.posts | size }}</em>
      <p class="highlight-selector">fragmenten</p>
    </a>
  </div>
</div>

<div class="col-sm-4">
  <div class="highlight">
    <a class="highlight-link" href="ankers.html">
      <em class="highlight-big">{{ site.anker | size }}</em>
      <p class="highlight-selector">ankers</p>
    </a>
  </div>
</div>

<div class="col-sm-4">
  <div class="highlight">
    <a class="highlight-link" href="sets.html">
      <em class="highlight-big">{{ site.set | size }}</em>
      <p class="highlight-selector">decors</p>
    </a>
  </div>
</div>

</div>

{% include footer.html %}
