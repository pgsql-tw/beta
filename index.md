---
permalink: /
---
<script>
  var page_urls = [];
{% for page in site.pages %}
  page_urls.push('{{ page.url | relative_url }}');
{% endfor %}
  var target = Math.floor(Math.random() * page_urls.length);
  location.href = page_urls[target];
  document.write(page_urls[target]);
</script>
