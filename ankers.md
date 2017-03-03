---
layout: page
title: Ankers
---

# Ankers

<p class="lead">Lezen elke dag het journaal voor.</p>

{% for anchor in site.anchors %}
<div class="col-1-3">
<div class="anchor-card">
<a href="{{anchor.url}}">
<p class="anchor-title">{{anchor.title}}</p>
<figure class="anchor-grid-image">
  {% include {{ anchor.icon }} %}
</figure>

</a>
</div>
</div>
{% endfor %}
