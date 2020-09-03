---
permalink: /
---

{% for page in site.pages %}
  <li>{{ page.title }} - {{ page.url }}</li>
{% endfor %}
