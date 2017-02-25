---
layout: page
title: Ankers
---

# Ankers

<p class="lead">Lezen elke dag het journaal voor.</p>

{% for anchor in site.anchors %}
  <div class="col-1-3">
    <a href="{{anchor.url}}">
      <img src="{{anchor.icon}}"/>
      <h2>{{anchor.title}}</h2>
    </a>
  </div>
{% endfor %}
