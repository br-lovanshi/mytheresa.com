class Navbar {
  Nav(el) {
    let topNav = document.createElement("div");
    topNav.setAttribute("id", "topNav");
    let catLinks = `<ul id="cat_L_Links">
                      <li><a href="index.html">women</a></li>
                      <li><a href="men.html">men</a></li>
                      <li><a href="kids.html">kids</a></li>
                      <li><a href="life.html">life</a></li>
                    </ul>
                    <ul id="cat_R_Links">
                      <li><a href="newslatter.html">Signup for Newsletter</a></li>
                      <li><a href="loginandsignup.html">My account</a></li>
                      <li><a href="./add_cart.html">My wishlist</a></li>
                      <li><a href="#">India | English</a></li>
                    </ul>`;
    topNav.innerHTML = catLinks;
    let midNav = document.createElement("div");
    midNav.setAttribute("id", "midNav");
    let midNavHtml = `
                      <a href="./add_cart.html"> <div id="logo">
                 
                      <img src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220608T143740">
                    </div>
                    <div id="cart">
                    
                    <span class="outer_cart">SHOPPING BAG<span class="material-symbols-outlined cart_bag">
                    shopping_bag
                    <span class="cartCount"><span>
                    </span></span></div></a>
    
    `;
    midNav.innerHTML = midNavHtml;

    let lowNav = document.createElement("div");
    lowNav.setAttribute("id", "lowNav");
    let lowNavHtml = `
                  <ul id="lowNavLinks">
                    <li class="lowNavlink"><a href="men.html" >NEW ARRIVALS</a></li>
                    <li class="lowNavlink"><a href="life.html" >DESIGNERS</a></li>
                    <li class="lowNavlink"><a href="men.html" >CLOTHING</a></li>
                    <li class="lowNavlink"><a href="men.html" >SHOES</a></li>
                    <li class="lowNavlink"><a href="men.html" >BAGS</a></li>
                    <li class="lowNavlink"><a href="men.html" >ACCESSORIES</a></li>
                    <li class="lowNavlink"><a href="life.html" >JEWELRY</a></li>
                    <li class="lowNavlink"><a href="life.html" >VACATION</a></li>
                    <li><a href="men.html" class="NavSales">SALE</a></li>
                  </ul>
                  <div class="input-group">
                    <input type="text" id="NavSearch" placeholder="Search for...">
                    <button class="searchBtn">
                      <span class="material-symbols-outlined searchIcon">
                        search
                      </span>
                    </button>
                    
                  </div>
    `;
    lowNav.innerHTML = lowNavHtml;

    el.append(topNav, midNav, lowNav);
  }
}

export default Navbar;
