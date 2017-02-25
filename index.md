---
layout: home
---

<div class="hero">
  <div class="grid grid-pad">
    {% include nav.html %}
    <div class="hero-image">
      {% include_relative img/logo-hero.svg %}
    </div>
    <h1 class="hero-title"><strong>Homo Journalius</strong><br/>kijkt met grote ogen naar Het Journaal</h1>
  </div>
</div>

<div class="grid grid-pad">

<div class="col-4-12">
  <div class="highlight">
    <a class="highlight-link" href="fragmenten.html">
      <em class="highlight-big number">{{ site.posts | size }}</em>
      <p class="highlight-selector">fragmenten</p>
    </a>
  </div>
</div>

<div class="col-4-12">
  <div class="highlight">
    <a class="highlight-link" href="ankers.html">
      <em class="highlight-big">{{ site.anchors | size }}</em>
      <p class="highlight-selector">ankers</p>
    </a>
  </div>
</div>

<div class="col-4-12">
  <div class="highlight">
    <a class="highlight-link" href="decors.html">
      <em class="highlight-big">{{ site.sets | size }}</em>
      <p class="highlight-selector">decors</p>
    </a>
  </div>
</div>

</div>
