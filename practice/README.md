# Mock practice run — Recipe Box

Same shape as the real practical: a featured item (flexbox) plus a card grid
(CSS Grid) populated with JavaScript. Different theme on purpose, so you're
practicing the *pattern*, not memorising specific answers.

Give yourself 45–60 minutes. No AI. Only the cheatsheets/MDN/CSS-Tricks in
this toolkit — exactly the resources the real exam rules allow.

## Files

- `starter/` — open this and actually do the work. `index.html` and
  `style.css` are intentionally close to empty, `script.js` has the sample
  data and task comments already in place. `data.js` is done for you (it
  simulates the API with `fakeFetchRecipes()` so this works with no
  internet connection).
- `solution/` — a completed, working version. Check it *after* attempting,
  to compare your approach — don't open it first.

## Tasks

**Task 1 — HTML structure + featured item**
`header` (h1), `main` (wraps both sections), `footer` (name + student ID),
title, stylesheet link, script tags. Inside main: `<section id="featured">`
and `<div id="card-grid">`. Build the featured item from `FEATURED_RECIPE`
as a template literal, insert with `innerHTML`.

**Task 2 — CSS: featured item**
`display: flex` on `#featured`, gap, fixed-width cover image that doesn't
stretch, `.description` hidden by default, header/footer styling, page
background colour. See the colour table in `starter/style.css`.

**Task 3 — JS: show more / show less**
Click listener on the button toggles a class on `.description` and swaps
`textContent` between "Show more" / "Show less". Attach it *after* the
featured item's `innerHTML` has been set.

**Task 4 — JS: fetch and render cards**
`async` function that awaits `fakeFetchRecipes()`, loops with `forEach` or
`for...of`, builds a template-literal card per item, appends with `+=`,
assigns to `#card-grid`'s `innerHTML` once after the loop. Each card needs
class `card`, an image with real `alt` text, and a `<p class="description">`.
Call the function on page load.

**Task 5 — CSS: card grid layout**
`#card-grid` as a grid with `repeat()` columns and a gap. Each `.card` as a
column flexbox with background, padding, rounded corners. Cover image fixed
width, height auto.

**Task 6 — Show descriptions checkbox**
Checkbox + label above `#card-grid`. `change` listener selects the card
descriptions *inside the handler* and toggles a class to show/hide them all.

**Task 7 — Git workflow (skip for this mock, or practice it for real)**
If you want the full drill, `git init` this `starter` folder and actually
commit after each task with a descriptive message.

## When you're done

Open `solution/index.html` next to your attempt and compare. If something
doesn't match, work out *why* before moving on — that's the part that
actually sticks for tomorrow.
