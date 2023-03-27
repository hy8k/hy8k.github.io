---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

## 投稿一覧

<ul class="tab-bar">
  <li class="tab">競技プログラミング</li>
  <li class="tab">ギター</li>
  <li class="tab">雑記</li>
</ul>
<div id="posts-list-area">
  <ul class="posts-list">
    {% for post in site.posts %}
      {% if post.category == "cp" %}
        <li>
          <small style="display: block;">{{ post.date | date: "%-d %B %Y" }}</small>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
  <ul class="posts-list">
    {% for post in site.posts %}
      {% if post.category == "guitar" %}
        <li>
          <small style="display: block;">{{ post.date | date: "%-d %B %Y" }}</small>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
  <ul class="posts-list">
    {% for post in site.posts %}
      {% if post.category == "memo" %}
        <li>
          <small style="display: block;">{{ post.date | date: "%-d %B %Y" }}</small>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
</div>    