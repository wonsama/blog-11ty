---
eleventyExcludeFromCollections: true
layout: base.njk
title: 시작페이지
---

<ul>
{%- for post in collections.all -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a> </li>
{%- endfor -%}
</ul>
