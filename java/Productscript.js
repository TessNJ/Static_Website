/*Product Page*/ 
const url = "https://kea-alt-del.dk/t7/api/products/1163"

fetch(url)
    .then(function (res){
        return res.json();
    })
    .then(function (data){
        showProduct(data);
    });

function showProduct (product){
    console.log(product);
    //grab template
    const template = document.querySelector("#templateProduct").content;
    //clone
    const copy = template.cloneNode(true);
    //change content
    copy.querySelector("h1").textContent = product.productdisplayname;
    copy.querySelector("div .description").innerHTML = product.description;
    copy.querySelector("div .colour").textContent = `Colour: ${product.basecolour}`;
    copy.querySelector(".display .productImg").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
    copy.querySelector("div .brand").textContent = `Brand: ${product.brandname}`;
    //grab parent
    const parent = document.querySelector("main");
    //append it 
    parent.appendChild(copy);
}


/*Add sizing dropdown maybe*/