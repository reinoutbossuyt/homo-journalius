---
title: Decors
permalink: sets/
layout: default
menu: sets
---

<div class="container-fluid">
<h1 class="pagetitle">Decors</h1>

<p class="lead">Het Journaal wisselde doorheen de jaren verschillende keren van vormgeving en decor. Ontdek ze hier allemaal.</p>

<ul class="set-list">
  {% for set in site.set %}
  <li class="set-list-item {% cycle 'odd', 'even'%}" >
    <div class="set-list-item-text">
      <h2 class="set-list-item-title"><span class="text-link">{{set.title}}</span></h2>
      <p class="set-list-item-intro">{{set.intro}}</p>
      <p><a href="{{set.url}}"><span class="text-link">{{set.link}}</span></a></p>
    </div>
    <figure class="set-list-item-image">
      <a href="{{set.url}}">
        {% include_relative /img/interieurs/{{set.icon}}.svg %}
      </a>
    </figure>
  </li>
  {% endfor %}
</ul>

</div>
