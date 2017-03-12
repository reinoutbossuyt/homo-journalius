---
layout: default
title: Fragmenten uit Het Journaal
menu: fragmenten
---

<div class="container-fluid">

<h1 class="pagetitle">Fragmenten</h1>

<p class="lead">Beleef een nostalgische trip door het verleden met oude Journaal-fragmenten.</p>

<div class="row">
  {% for post in site.posts reversed %}
    {% assign youtube = post.media[0] %}
    <div class="col-sm-4 col-lg-3">
      {% include post.html url=post.url youtubeid=youtube.id date=post.date title=post.title set=post.decor %}
    </div>
  {% endfor %}
</div>

</div>
