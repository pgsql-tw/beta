---
permalink: /
---

{% for page in pages %}
  <li>{{ page.title }} - {{ page.url }}</li>
{% endfor %}
