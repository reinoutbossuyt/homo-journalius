---
layout: default
title: Decors
menu: sets
---

<div class="container-fluid">
<h1 class="pagetitle">Decors</h1>

<p class="lead">Het Journaal wisselde doorheen de jaren verschillende keren van vormgeving en decor. Ontdek ze hier allemaal.</p>

<div class="sets">
  <ul class="timeline-list">
    {% for set in site.set %}
    <li class="timeline-item">
       <a href="{{set.url}}">
          <span class="text-link">{{set.title}}</span>
          <figure class="timeline-image">
            {% include {{set.icon}} %}
          </figure>
        </a>
    </li>
    {% endfor %}
  </ul>
</div>

</div>
