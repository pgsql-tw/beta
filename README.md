# beta
我在台灣，我用PostgreSQL

{% for page in site.pages %}
  [{{ page.title }}]({{ page.url }})
{% endfor %}

{% for bg in site.backgrounds %}
  <a href="{{ bg.link }}"><img src="{{ bg.src }}" height=200 /></a>
{% endfor %}
