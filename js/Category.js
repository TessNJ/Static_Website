const url = "https://kea-alt-del.dk/t7/api/categories";

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        handleCategories(data);
    })

function handleCategories(data) {
    console.log(data);
    data.forEach(showCategory);
}
function showCategory(categories) {
    // grab template
    const template = document.querySelector("#templateCategory").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content 
    copy.querySelector(".link").setAttribute("href", `productlist.html?category=${categories.category}`);
    copy.querySelector(".link").textContent = categories.category;
    // grab parent
    const parent = document.querySelector("ul");
    //append
    parent.appendChild(copy);
}