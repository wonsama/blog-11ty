---
layout: base.njk
title: 태그 활용하기
tags: ["한글", "태그"]
sub_title: COLLECTIONS (USING TAGS)
sub_title_link: https://www.11ty.dev/docs/collections/
---

<ul>
{%- for post in collections["코드"] -%}
  <li>post.inputPath - {{ post.inputPath }}</li>
  <li>post.fileSlug - {{ post.fileSlug }}</li>
  <li>post.outputPath - {{ post.outputPath }}</li>
  <li>post.url - {{ post.url }}</li>
  <li>post.date - {{ post.date }}</li>
  <li>post.data - {{ post.data }}</li>
  <li>post.data.layout - {{ post.data.layout }}</li>
  <li>post.templateContent - {{ post.templateContent }}</li> <!-- 순환 참조에 유의 해야 된다. 내 자신이 들어가면 안됨 -->
{%- endfor -%}
</ul>
