---
layout: default
title: Ankers
menu: ankers
permalink: ankers/
---

<div class="container-fluid">
  <h1 class="pagetitle">Journaal-ankers</h1>

  <p class="lead">Lezen elke dag het journaal voor.</p>


  <p>De Vlaamse omroep was één van de eerste in West-Europa om het nieuws te zenden waarbij een journalist op het scherm verscheen. Ondertussen - meer 60 jaar na de start van de start van televisie en Het Journaal – passeerden heel wat ankers de revue. Ontdek ze hier allemaal.</p>


  <div class="row">
    {% for anker in site.anker %}
      <div class="col-xs-6 col-sm-3 col-lg-2">
        <a href="{{anker.url}}">
          <figure class="anker-grid-image">
            {% include {{ anker.icon }} %}
          </figure>
        </a>
        <div class="module">
          <p class="module-title"><a href="{{anker.url}}">{{anker.title}}</a></p>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
