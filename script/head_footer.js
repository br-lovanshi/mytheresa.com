// ------------------------> Imports <----------------------
import Footer from "../components/footer.js";
import Navbar from "../components/navbar.js";
// ===============================================================
// ------------------------> Navbar <----------------------
let navContainer = document.getElementById("navbar");
let navbar = new Navbar();
navbar.Nav(navContainer);
let userData = JSON.parse(localStorage.getItem("userData")) || [];

document.querySelector(".cartCount").innerText = userData.length;

// ------------------------> Footer <----------------------

let footerContainer = document.getElementById("footer");
let footer = new Footer();
footer.displayFooter(footerContainer);
