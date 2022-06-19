
let productdetails = document.getElementById("productdetails");
import {product  } from "./components/compoents.js";
productdetails.innerHTML = product();


{var mainImg = document.getElementById("mainImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;
}
}

let addToCart = document.getElementById("addToCart");
addToCart.addEventListener("click",function(){
    alert("item added on cart");

})

let buyNow = document.getElementById("buyNow");
buyNow.addEventListener("click",function(){
    // alert("item added on cart");
    window.location.href="payment.html" //"payment.html"
    
})

import {featersPro  } from "./components/compoents.js";
let product1 = document.getElementById("product1");
product1.innerHTML = featersPro();





let btn = document.createElement("button");
btn.setAttribute("id","btns");
btn.innerText  = "Explore More "


btn.addEventListener("click",function(){
    window.location.href="life.html";
});
document.querySelector("body").append(btn);
