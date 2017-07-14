---
layout: home
description: Homo Journalius verzamelt oude Journaal-fragmenten, triviale weetjes
  over nieuwsdecors en de Journaalankers van 1953 tot nu.
---

<div class="hero">
  <div class="grid grid-pad">
    <div class="hero-image">
      {% include_relative img/logo-hero.svg %}
    </div>
    <h1 class="hero-title"><strong>Homo&nbsp;Journalius</strong><br/>belicht de grote en kleine geschiedenis van Het&nbsp;Journaal</h1>
  </div>
</div>

<div class="container-fluid">

<div class="col-sm-4">
  <div class="highlight">
    <a class="highlight-link" href="/fragmenten">
      <img src="/img/home-fragmenten.svg">
      {% include anum.html size=site.posts.size%}
      <p class="highlight-selector">fragmenten</p>
    </a>
  </div>
</div>

<div class="col-sm-4">
  <div class="highlight">
    <a class="highlight-link" href="/ankers">
      <img src="/img/home-ankers.svg">
      {% include anum.html size=site.anker.size%}
      <p class="highlight-selector">ankers</p>
    </a>
  </div>
</div>

<div class="col-sm-4">
  <div class="highlight">
    <a class="highlight-link" href="/sets">
      <img src="/img/home-sets.svg">
      {% include anum.html size=site.set.size%}
      <p class="highlight-selector">decors</p>
    </a>
  </div>
</div>

</div>

{% include footer.html %}
