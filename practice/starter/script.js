// Mock practice run - same shape as the real brief, recipes instead of books.
// FEATURED_RECIPE, RECIPES and fakeFetchRecipes() are provided in data.js.
// Give yourself 45-60 minutes. No AI. Only this toolkit's cheatsheets + MDN,
// exactly like the real exam rules allow.

// ---------- Task 1: featured item ----------
// Build the featured item as a template literal string, reading values off
// FEATURED_RECIPE with dot notation. Put the finished string into #featured
// using innerHTML. Structure to produce:
//
// <img src="..." alt="...">
// <div class="featured-info">
//   <h2>Title here</h2>
//   <p class="meta">Chef · Cuisine · Minutes</p>
//   <p class="description">Description text here...</p>
//   <button id="toggle-desc">Show more</button>
// </div>


// ---------- Task 3: show more / show less ----------
// Add a click listener to #toggle-desc that toggles a class on .description
// and swaps the button's textContent between "Show more" / "Show less".
// Must run AFTER the line above that fills #featured.


// ---------- Task 4: fetch and render cards ----------
// Write an async function that awaits fakeFetchRecipes(), loops over the
// results with forEach or for...of, builds each card as a template literal,
// appends each one to a string with +=, then sets #card-grid's innerHTML
// ONCE after the loop. Each card needs class="card", a cover image with alt
// text, title, chef, cuisine, minutes, and a <p class="description">.
// Remember to actually call the function.


// ---------- Task 6: show descriptions checkbox ----------
// Listen for the checkbox's change event. Select the card descriptions
// INSIDE the handler (they don't exist until Task 4's fetch has finished).
// When ticked, show every card's description; when unticked, hide them.
