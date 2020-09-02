{% for page in site.pages %}
  {{ page.content }}
{% endfor %}

{{ site.pages | size }}

{% for bg in site.backgrounds %}
  <a href="{{ bg.link }}"><img src="{{ bg.src }}" height=200 /></a>
{% endfor %}
