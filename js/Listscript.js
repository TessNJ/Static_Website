const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("category");

/* General dynamic */
const url = "https://kea-alt-del.dk/t7/api/products?category=" + id;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("#templateList").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h2").textContent = product.productdisplayname;
  copy.querySelector(
    ".type_brand"
  ).textContent = `${product.articletype}  |  ${product.brandname}`;
  copy.querySelector(".price").textContent = `${product.price} DKK`;
  copy.querySelector(
    ".Img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  copy.querySelector(".Img").alt = product.productdisplayname;
  copy
    .querySelector(".view")
    .setAttribute("href", `product.html?id=${product.id}`);
  document.querySelector(".category_title").textContent = product.category;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".discounted p").textContent = `Now ${Math.floor(
      product.price - product.price * (product.discount / 100)
    )} DKK`;
    copy.querySelector(
      ".discounted .percent"
    ).textContent = `-${product.discount}%`;
    copy.querySelector(".price").textContent = `Before ${product.price} DKK`;
  } else {
    copy.querySelector("article .percent").classList.remove("percent");
  }

  const parent = document.querySelector("div.list_grid");
  //append
  parent.appendChild(copy);
}

/*Next page*/
//My attempt at make a next and previous button

// document.querySelector("#prev").addEventListener("click", previousPage);
// document.querySelector("#next").addEventListener("click", nextPage);

// function previousPage(prevPage) {
//   const urlParams = new URLSearchParams(window.location.search);
//   const query = urlParams.get("category");
//   const start = urlParams.get("start");
//   var number = Math.round(start - 10);
//   console.log("urlParams");
//   if (start < 10) {
//     document
//       .querySelector("#next")
//       .setAttribute(
//         "href",
//         `productlist.html?category=${query}&start=${number}`
//       );
//   }
// }

// function nextPage() {
//   const urlParams = new URLSearchParams(window.location.search);
//   const query = urlParams.get("category");
//   const start = urlParams.get("start");
//   var number = Math.round(start + 10);
//   console.log(start);
//   document
//     .querySelector("#next")
//     .setAttribute("href", `productlist.html?category=${query}&start=${number}`);
// }
