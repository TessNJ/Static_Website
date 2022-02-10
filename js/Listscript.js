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
    console.log(data);
    data.forEach(showProduct);
}

function showProduct(product) {
    //soldOut onSale
    //grab the template
    const template = document.querySelector("#templateList").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content **
    copy.querySelector("h2").textContent = product.productdisplayname;
    copy.querySelector(".type_brand").textContent = `${product.articletype}  |  ${product.brandname}`;
    copy.querySelector(".price").textContent = `${product.price} DKK`;
    copy.querySelector(".Img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
    copy.querySelector(".Img").alt = product.productdisplayname;
    copy.querySelector(".view").setAttribute("href", `product.html?id=${product.id}`);
    
    if(product.soldOut) {
        copy.querySelector("article").classList.add("soldOut");
    }
    if(product.discount) {
        copy.querySelector("article").classList.add("onSale");
        copy.querySelector(".discounted p").textContent = `Now ${Math.floor(product.price - (product.price*(product.discount/100)))} DKK`;
        copy.querySelector(".discounted .percent"). textContent = `-${product.discount}%`;
        copy.querySelector(".price").textContent = `Before ${product.price} DKK`
    } else {
         copy.querySelector("article .percent").classList.remove("percent");
    }
    //grab parent

    const parent = document.querySelector("div.list_grid");
    //append
    parent.appendChild(copy);
}

/*Next page*/