//your code here
// Step 1: Define an array of band names
const bandNames = [
  "The Beatles",
  "Aerosmith",
  "Led Zeppelin",
  "The Rolling Stones",
  "Red Hot Chili Peppers",
];

// Step 2: Create a function to filter out articles
function filterArticles(name) {
  return name.replace(/^(a |an |the )/i, "").trim();
}

// Step 3: Sort the filtered band names
const sortedBandNames = bandNames.map(filterArticles).sort();

// Step 4: Create a ul element with id='band'
const ulElement = document.createElement("ul");
ulElement.id = "band";

// Step 5: Create li elements for each sorted band name and append them to the ul
sortedBandNames.forEach((bandName) => {
  const liElement = document.createElement("li");
  liElement.textContent = bandName;
  ulElement.appendChild(liElement);
});

// Step 6: Append the ul element to the HTML document
document.body.appendChild(ulElement);

