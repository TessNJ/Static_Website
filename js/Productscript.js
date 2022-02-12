const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
// console.log(urlParams.get("id"));

/*Product Page*/

const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    showProduct(data);
  });

function showProduct(product) {
  console.log(product);
  //grab template
  const template = document.querySelector("#templateProduct").content;
  //clone
  const copy = template.cloneNode(true);
  //change content
  copy.querySelector(".displayName").textContent = product.productdisplayname;
  copy.querySelector(".description").innerHTML = product.description;
  copy.querySelector(
    "div .colour"
  ).textContent = `Colour: ${product.basecolour}`;
  copy.querySelector(
    ".display .productImg"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  copy.querySelector("div .brand").textContent = `Brand: ${product.brandname}`;
  copy
    .querySelector(".hereCat")
    .setAttribute("href", `productlist.html?category=${product.category}`);
  copy.querySelector(".hereCat").textContent = product.brandname;
  copy.querySelector(".hereName").textContent = product.productdisplayname;
  copy.querySelector(".price").textContent = `${product.price} DKK`;

  if (product.soldout) {
    copy.querySelector("section").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("section").classList.add("onSale");
    copy.querySelector(".discounted p").textContent = `Now ${Math.floor(
      product.price - product.price * (product.discount / 100)
    )} DKK`;
    copy.querySelector(
      ".discounted .percent"
    ).textContent = `-${product.discount}%`;
    copy.querySelector(".price").textContent = `Before ${product.price} DKK`;
  } else {
    copy.querySelector("section .percent").classList.remove("percent");
  }
  //grab parent
  const parent = document.querySelector("main");
  //append it
  parent.appendChild(copy);
}

/*Add sizing dropdown maybe*/
