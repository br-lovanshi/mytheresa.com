import Home from "../components/home.js";
import displayHome from "../components/home.js";
let cart = document.querySelector("#cart");
let userData = JSON.parse(localStorage.getItem("userData"));
let cartCount = document.querySelector(".cartCount");

// scroll effect for nav bar

document.addEventListener("scroll", function () {
  // let cartCount = document.querySelector(".cartCount");
  cartCount.innerText = userData.length;
  let mNav = document.getElementById("midNav");
  let lNav = document.getElementById("lowNav");
  let pY = window.pageYOffset;
  let midnavcart = document.querySelector("#midNav #cart");
  let lowNavCart = document.querySelector("#lowNav #cart");

  if (pY > 130) {
    if (midnavcart) {
      midnavcart.remove();
      lNav.innerHTML += `<span class="outer_cart" id="cart"><span class="material-symbols-outlined cart_bag">
      shopping_bag
      <span class="cartCount"><span>
      </span></span>`;
      cartCount = document.querySelector(".cartCount");
      cartCount.innerText = userData.length;

      let crt = document.getElementById("cart");
      crt.style.display = "flex";
      crt.style.position = "static";
      crt.style.fontSize = "32px";

      cart = document.querySelector("#cart");

      cart.addEventListener("click", function () {
        window.location = "./add_cart.html";
      });
    }
  } else {
    if (lowNavCart) {
      lowNavCart.remove();
      mNav.innerHTML += `<div id="cart"><span class="outer_cart">SHOPPING BAG<span class="material-symbols-outlined cart_bag">
                          shopping_bag
                          <span class="cartCount"><span>
                          </span></span></div>`;

      cart = document.querySelector("#cart");
      console.log(cart);
      cart.addEventListener("click", function () {
        window.location = "./add_cart.html";
      });
    }

    // hover effect for to dropdown menu of navlinks
    // makeHoverEffect();
    // add cart to mid nav
    // remove cart from lnav
  }

  cartCount = document.querySelector(".cartCount");
  cartCount.innerText = userData.length;
});

// makeHoverEffect();
let home = document.getElementById("mainSection");
if (home) {
  let hm = new Home();
  hm.displayHome(home);
}

// for googleplay and app store links

let appStore = document.querySelector(".appStore");
if (appStore) {
  appStore.addEventListener("click", function () {
    window.location =
      "https://apps.apple.com/in/app/mytheresa-luxury-fashion-edit/id484615570";
  });
  let playStore = document.querySelector(".googlePlay");
  playStore.addEventListener("click", function () {
    window.location = "https://play.google.com/store/search?q=mytheresa&c=apps";
  });
}
