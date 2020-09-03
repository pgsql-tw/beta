---
permalink: /
---

{% for page in site.pages %}
  <li>{{ page.title }} - {{ page.url | relative_url }}</li>
{% endfor %}
