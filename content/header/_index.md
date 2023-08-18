---
title: "Header"
description: ""
insert_anchor_links: "left"
template: "partials/header.html"
extra:
  logoPath: "/images/OW_Logo.png"
  imgPath: ""
---

- [About]("/about")
- [Ventures]("/ventures")
- More Info

{% row() %}

<button onclick="openInNewTab('https://ourworldventures.github.io/info_ourworld/intro/intro.html')">

[Knowledgebase](https://ourworldventures.github.io/info_ourworld/intro/intro.html)
<br>
<p class="text-sm">Dive deep into OurWorld</p>

<button onclick="window.location.href='/blog'">

[Blog](/blog)
<br>
<p class="text-sm">Read our stories</p>

</button>

|||

<button onclick="window.location.href='/newsroom'">

[Our Partners](/newsroom)
<br>
<p class="text-sm">Check the latest updates</p>

|||

<button onclick="window.location.href='/people'">

[ThreeFold Community](/people)
<br>
<p class="text-sm">Meet the team</p>

</button>

{% end %}