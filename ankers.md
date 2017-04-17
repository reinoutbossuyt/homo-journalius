---
layout: default
title: Ankers
menu: ankers
permalink: ankers/
description: "Meer dan 60 jaar na de start van Het Journaal passeerden heel wat ankers de revue. Ontdek ze hier allemaal."
---

<div class="container-fluid">
  <h1 class="pagetitle">Ankers van Het Journaal</h1>

  <p class="lead">De Vlaamse omroep was in 1953 een van de eerste in West-Europa om het nieuws te laten lezen door een journalist in beeld. Andere omroepen kozen indertijd voor een nieuwslezer buiten beeld. {% fn %}</p>

  <p>Ondertussen - meer dan 60 jaar na de start van het televisietijdperk en Het Journaal – passeerden heel wat ankers de revue. Ontdek ze hier allemaal.</p>


  <div class="row">
    {% for anker in site.anker %}
      <div class="col-xs-6 col-sm-3 col-lg-2">
        <div class="anker-grid-tile">
        <a href="{{anker.url}}">
          <figure class="anker-grid-image">
            {% capture icon %}svg/ankers/{{anker.icon}}.svg{% endcapture %}
            {% include {{icon}} %}
          </figure>
        </a>
        <div class="module">
          <p class="module-title"><a href="{{anker.url}}">{{anker.title}}</a></p>
        </div>
        </div>
      </div>
    {% endfor %}
  </div>

{% footnotes %}
{% fnbody %}
<a href="https://books.google.be/books?id=N1TmDiOsXwkC" target="_blank">Publieke televisie in Vlaanderen: een geschiedenis, Alexander Dhoest</a>
{% endfnbody %}
{% endfootnotes %}

</div>
