---
layout: page
title: Fragmenten
---
# Fragmenten

<p class="lead">Beleef een nostalgische trip door het verleden met oude Journaal-fragmenten.</p>

{% for post in site.posts reversed %}
<div class="col-4-12">
  {% include post.html url=post.url youtubeid=post.youtubeid date=post.date title=post.title set=post.decor %}
</div>
{% endfor %}
