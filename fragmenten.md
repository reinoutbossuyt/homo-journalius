---
title: Fragmenten uit Het Journaal
permalink: fragmenten/
layout: default
menu: fragmenten
description: Beleef een nostalgische trip door het verleden met oude Journaal-fragmenten.
---

<div class="container-fluid">

<h1 class="pagetitle">Fragmenten</h1>

<p class="lead">Beleef een nostalgische trip door het verleden met oude Journaal-fragmenten.</p>

<div class="text">

<p>Vroeger werden <strong>geen volledige opnames van het journaal bijgehouden</strong>. Het was niet evident om een volledige nieuwsuitzending te registreren. Zo is veel materiaal verloren gegaan.</p>

<p>Pas in 1987 werd beslist om het <strong>volledige journaal</strong> te bewaren, inclusief de in- en uitleidingen van ankers, de hoofdpunten, ... Dat kwam na een klacht tegen Martine Tanghe, die bij het voorlezen van een nieuwsonderwerp ongepast zou hebben geglimlacht.</p>

<P>Om dergelijke klachten te kunnen onderzoeken, werden voortaan volledige opnames van het nieuws bewaard. Aanvankelijk tot drie maanden na uitzending, maar al snel <strong>definitief</strong>. Op Youtube vind je gelukkig nog oudere fragmenten en zelfs volledige nieuwsuitzendingen, die eerder toevallig opgenomen zijn door kijkers.</p>

</div>

<div class="row">
  {% for post in site.posts reversed %}
    {% assign youtube = post.media[0] %}
    <div class="col-sm-4 col-lg-3">
      {% include post.html url=post.url youtubeid=youtube.id date=post.date title=post.title set=post.decor %}
    </div>
  {% endfor %}
</div>

</div>
