---
title: Over
permalink: decors/
layout: default
menu: decors
---

<div class="container-fluid">
<div class="row inverted">
  {% for set in site.set %}
    <div class="col-sm-8">
      <figure style="width: 100%; height: auto;">
      {% if set.image %}
      {% include {{set.image}} %}
      {% endif %}
      </figure>
    </div>
  {% endfor %}
</div>
</div>

<style type="text/css">
svg {
  width: 100%;
  height: auto;
  margin-bottom: 200px;
}
</style>
