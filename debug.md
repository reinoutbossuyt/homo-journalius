---
layout: default
---

{% for post in site.posts %}
  <img src="http://img.youtube.com/vi/{{post.youtubeid}}/1.jpg" alt="{{post.youtubeid}}" title="{{post.youtubeid}}">
{% endfor %}
