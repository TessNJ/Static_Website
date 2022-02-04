const url = "https://kea-alt-del.dk/t7/api/products/1163"

fetch(url)
    .then((res)=>res.json())
    .then((data)=>showProduct(data));

function showProduct (product){
    console.log(product);
    document.querySelector(".display .displayName").textContent = product.productdisplayname;
    document.querySelector(".display .productImg").src = "https://kea-alt-del.dk/t7/images/webp/1000/1163.webp"
    document.querySelector(".productInfo .description").innerHTML = product.description;
    document.querySelector(".productInfo .colour").textContent = `Colour: ${product.basecolour}`;
    document.querySelector(".productInfo .brand").textContent = `Brand: ${product.brandname}`;

}