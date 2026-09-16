// Provided for you - do not need to edit this file.
// Generates simple placeholder cover images as inline SVGs (data URIs)
// so the whole practice run works with zero internet connection.

function placeholderCover(label, bg) {
  bg = bg || "#c98a2c";
  const safeLabel = String(label).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="240" height="320">' +
    '<rect width="100%" height="100%" fill="' + bg + '"/>' +
    '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" ' +
    'font-family="sans-serif" font-size="20" fill="#ffffff">' + safeLabel + '</text>' +
    '</svg>';
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

// The "sample data" for the featured item (Task 1) - same idea as
// the sampleData object in the real brief, just a different theme.
const FEATURED_RECIPE = {
  id: 0,
  title: "Charred Corn & Lime Salad",
  chef: "Amara Osei",
  cuisine: "West African fusion",
  minutes: 25,
  description:
    "Sweetcorn blistered hard in a dry pan until the sugars catch, tossed while still hot with lime, chilli oil and torn coriander. Serves well warm or cold, and keeps for two days in the fridge without losing its bite.",
  image: placeholderCover("Corn Salad", "#7a8f6a"),
};

// The "API data" for the card grid (Task 4) - fakeFetchRecipes()
// below simulates a real fetch() so the async pattern is identical.
const RECIPES = [
  {
    id: 1,
    title: "Miso Butter Roast Carrots",
    chef: "Daniel Cho",
    cuisine: "Japanese-inspired",
    minutes: 40,
    description: "Whole carrots roasted until collapsing, glazed twice with a miso-brown-butter mix.",
    image: placeholderCover("Carrots", "#c98a2c"),
  },
  {
    id: 2,
    title: "Smoky Black Bean Stew",
    chef: "Renata Alves",
    cuisine: "Brazilian",
    minutes: 55,
    description: "A weeknight feijoada shortcut - smoked paprika standing in for the usual cured meats.",
    image: placeholderCover("Bean Stew", "#8a4b2f"),
  },
  {
    id: 3,
    title: "Brown Butter Sage Gnocchi",
    chef: "Lucia Marino",
    cuisine: "Italian",
    minutes: 30,
    description: "Store-bought gnocchi rescued by four minutes in nutty, crisped brown butter and sage.",
    image: placeholderCover("Gnocchi", "#5c4a2f"),
  },
  {
    id: 4,
    title: "Turmeric Coconut Dal",
    chef: "Priya Nair",
    cuisine: "South Indian",
    minutes: 45,
    description: "Red lentils simmered low and slow with coconut milk, curry leaves and a hot tadka.",
    image: placeholderCover("Dal", "#c9962c"),
  },
  {
    id: 5,
    title: "Charred Cabbage Steaks",
    chef: "Tomas Novak",
    cuisine: "Central European",
    minutes: 35,
    description: "Thick cabbage wedges seared until the edges caramelise, finished with a mustard vinaigrette.",
    image: placeholderCover("Cabbage", "#4b6b3a"),
  },
  {
    id: 6,
    title: "Preserved Lemon Roast Chicken",
    chef: "Yasmin Haddad",
    cuisine: "North African",
    minutes: 70,
    description: "A whole bird rubbed under the skin with preserved lemon, garlic and cumin butter.",
    image: placeholderCover("Chicken", "#b5652f"),
  },
];

// Simulates: const response = await fetch(API_URL); const data = await response.json();
function fakeFetchRecipes() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(RECIPES), 400);
  });
}
