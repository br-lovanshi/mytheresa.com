


let data = JSON.parse(localStorage.getItem("userData")) || [];
console.log(data)

display(data);

function display(data) {
    let n22 = document.getElementById("tbs");
    n22.innerHTML = null
    var tot = 0;
    data.forEach(function (el, index) {
        n22.innerHTML += `<tr>
      <td id="photo"><img src=${el.image_url}
      class="prpoo"></td>
       <td id="detidaiss">
        <p>${el.name}</p>
 
     <button onclick="myFunction(${index})" id="hatao"><i class="fa-solid fa-xmark"></i> Remove</button>
     </td>
     <td id="daam">₹${el.price}</td>
     <td id="sankhya"><input type="number" id="qutty"></td>
     <td id="joda">₹${el.price}</td>
     </tr>
     <hr>`

        tot += el.price
    })
    calci(tot);
    
   
}

function myFunction(index) {
    let data = JSON.parse(localStorage.getItem("userData")) || [];


    let newData = data.filter(function (el, i) {
        if (i == index) {
            let trash = JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(el);
            localStorage.setItem("trash", JSON.stringify(trash));
        } else {
            return i !== index;
        }
    });

    localStorage.setItem("userData", JSON.stringify(newData));
    display(data);
}

  function calci(tot) {
    let ress = document.getElementById("second");
    ress.innerHTML =
        `<tr id="sec">
          <p class="sec">Total</p>

          <td><p class="sec">₹${tot}</p></td>
        </tr>
        `

        return tot;

}



let nitti = document.getElementById("code");
nitti.addEventListener("click", function (){
   let cupon = document.getElementById("texting").value
   var ppt = 0
   data.forEach(function (e){
     ppt+=e.price;

   })
   var top=0;
   if(cupon === "SALE" & ppt >= 600)
   {
     top =ppt-(Math.floor(ppt*20)/100)
   }
   let ress = document.getElementById("second");
   ress.innerHTML =
       `<tr id="sec">
         <p class="sec">Total</p>

         <td><p class="sec">₹${top}</p></td>
       </tr>
       `
   
})

let cartData  = JSON.parse(localStorage.getItem("userData"));
console.log(cartData);

import Navbar from "../components/navbar.js";

let navContainer = document.getElementById("navbarMen");
let navbar = new Navbar();
navbar.Nav(navContainer);

// ------------------------> Footer <----------------------

// let footerContainer = document.getElementById("footer");
// let footer = new Footer();
// footer.Footer(footerContainer);
import {footerHtml} from "../components/compoents.js";
document.getElementById("footer").innerHTML = footerHtml()

