// ------------------------> Imports <----------------------
import Footer from "../components/footer.js";
import Navbar from "../components/navbar.js";
// ===============================================================
// ------------------------> Navbar <----------------------
let navContainer = document.getElementById("navbar");
let navbar = new Navbar();
navbar.Nav(navContainer);

// ------------------------> Footer <----------------------

let footerContainer = document.getElementById("footer");
let footer = new Footer();
footer.Footer(footerContainer);
