---
layout: page
title: Decors
---

# Decors

<p class="lead">Het Journaal wisselde doorheen de jaren verschillende keren van vormgeving en decor. Ontdek ze hier allemaal.</p>

<div class="sets">
  <ul class="timeline-list">
    {% for set in site.sets %}
    <li class="timeline-item">
       <a href="{{set.url}}">
        <h2>{{set.title}}</h2>
          <figure class="timeline-image">
            {% include {{set.icon}} %}
          </figure>
        </a>
    </li>
    {% endfor %}
  </ul>
</div>
