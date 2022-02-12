const url = "https://kea-alt-del.dk/t7/api/categories";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleCategories(data);
  });

function handleCategories(data) {
  data.forEach(showCategory);
}
function showCategory(categories) {
  const template = document.querySelector("#templateCategory").content;
  const copy = template.cloneNode(true);
  copy
    .querySelector(".link")
    .setAttribute(
      "href",
      `productlist.html?category=${categories.category}&start=10`
    );
  copy.querySelector(".link").textContent = categories.category;
  const parent = document.querySelector("ul");
  parent.appendChild(copy);
}
