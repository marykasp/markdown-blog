---
title: "Two Forms of Pre-rendering"
date: "2024-01-07"
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates HTML for the page.

1. **Static Generation** is the pre-rendering method that generates the HTML at _build time_. The pre-renderd HTML is then `reused` on each request.
2. **Server Side** is the pre-rendering method that generates the HTML on **each request**

Next.js will let you _choose_ which pre-rendering form to use for each page. You can even create a hybrid Next.js app by using Static Generation for most pages and using server side for others.
