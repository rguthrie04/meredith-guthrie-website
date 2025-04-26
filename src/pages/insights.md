---
layout: base.njk
title: Insights & Reflections
permalink: /insights/
---

## Insights & Reflections

Here you'll find reflections on published work, ongoing research, and other insights into late-medieval and early modern history.

{% set postslist = collections.post | reverse %}

<ul>
{% for post in postslist %}
  <li>
    <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
    {% if post.data.date %}
      <p><time datetime="{{ post.data.date | formatDate('yyyy-LL-dd') }}">{{ post.data.date | readableDate }}</time></p>
    {% endif %}
    {# Optional: Add excerpt here later #}
    <p><a href="{{ post.url }}">Read more &rarr;</a></p>
  </li>
{% else %}
  <li>No insights posted yet.</li>
{% endfor %}
</ul> 