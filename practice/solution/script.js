// ---------- Task 1: featured item ----------
const featured = document.getElementById("featured");

featured.innerHTML = `
  <img src="${FEATURED_RECIPE.image}" alt="Plated charred corn and lime salad with coriander">
  <div class="featured-info">
    <h2>${FEATURED_RECIPE.title}</h2>
    <p class="meta">${FEATURED_RECIPE.chef} &middot; ${FEATURED_RECIPE.cuisine} &middot; ${FEATURED_RECIPE.minutes} min</p>
    <p class="description">${FEATURED_RECIPE.description}</p>
    <button id="toggle-desc">Show more</button>
  </div>
`;

// ---------- Task 3: show more / show less ----------
// Selector is attached AFTER the innerHTML above, because the button
// doesn't exist until that line has run.
const toggleBtn = document.getElementById("toggle-desc");
const featuredDescription = document.querySelector("#featured .description");

toggleBtn.addEventListener("click", () => {
  featuredDescription.classList.toggle("show");
  toggleBtn.textContent = featuredDescription.classList.contains("show")
    ? "Show less"
    : "Show more";
});

// ---------- Task 4: fetch and render cards ----------
async function loadRecipes() {
  const recipes = await fakeFetchRecipes(); // stands in for: await (await fetch(url)).json()

  const cardGrid = document.getElementById("card-grid");
  let cards = "";

  recipes.forEach((recipe) => {
    cards += `
      <article class="card">
        <img src="${recipe.image}" alt="${recipe.title}">
        <h2>${recipe.title}</h2>
        <p class="meta">${recipe.chef} &middot; ${recipe.cuisine} &middot; ${recipe.minutes} min</p>
        <p class="description">${recipe.description}</p>
      </article>
    `;
  });

  cardGrid.innerHTML = cards; // assigned once, after the loop finishes
}

loadRecipes();

// ---------- Task 6: show descriptions checkbox ----------
const showDescriptionsBox = document.getElementById("show-descriptions");

showDescriptionsBox.addEventListener("change", () => {
  // selected INSIDE the handler - the cards don't exist until loadRecipes() resolves
  const cardDescriptions = document.querySelectorAll("#card-grid .description");

  cardDescriptions.forEach((description) => {
    description.classList.toggle("show", showDescriptionsBox.checked);
  });
});
