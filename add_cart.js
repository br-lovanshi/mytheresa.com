


// let data = JSON.parse(localStorage.getItem("userData")) || [];
// console.log(data)

// display(data);

// function display(data) {
//     let n22 = document.getElementById("tbs");
//     n22.innerHTML = null
//     var tot = 0;
//     data.forEach(function (el, index) {
//         n22.innerHTML += `<tr>
//       <td id="photo"><img src=${el.image_url}
//       class="prpoo"></td>
//        <td id="detidaiss">
//         <p>${el.name}</p>
 
//      <button onclick="myFunction(${index})" id="hatao"><i class="fa-solid fa-xmark"></i> Remove</button>
//      </td>
//      <td id="daam">₹${el.price}</td>
//      <td id="sankhya"><input type="number" id="qutty"></td>
//      <td id="joda">₹${el.price}</td>
//      </tr>
//      <hr>`

//         tot += el.price
//     })
//     calci(tot);
    
   
// }

// function myFunction(index) {
//     let data = JSON.parse(localStorage.getItem("userData")) || [];


//     let newData = data.filter(function (el, i) {
//         if (i == index) {
//             let trash = JSON.parse(localStorage.getItem("trash")) || [];
//             trash.push(el);
//             localStorage.setItem("trash", JSON.stringify(trash));
//         } else {
//             return i !== index;
//         }
//     });

//     localStorage.setItem("userData", JSON.stringify(newData));
//     display(data);
// }

//   function calci(tot) {
//     let ress = document.getElementById("second");
//     ress.innerHTML =
//         `<tr id="sec">
//           <p class="sec">Total</p>

//           <td><p class="sec">₹${tot}</p></td>
//         </tr>
//         `

//         return tot;

// }



// let nitti = document.getElementById("code");
// nitti.addEventListener("click", function (){
//    let cupon = document.getElementById("texting").value
//    var ppt = 0
//    data.forEach(function (e){
//      ppt+=e.price;

//    })
//    var top=0;
//    if(cupon === "SALE" & ppt >= 600)
//    {
//      top =ppt-(Math.floor(ppt*20)/100)
//    }
//    let ress = document.getElementById("second");
//    ress.innerHTML =
//        `<tr id="sec">
//          <p class="sec">Total</p>

//          <td><p class="sec">₹${top}</p></td>
//        </tr>
//        `
   
// })

// let cartData  = JSON.parse(localStorage.getItem("userData"));
// console.log(cartData);

// import Navbar from "./components/navbar.js";

// let navContainer = document.getElementById("navbarMen");
// let navbar = new Navbar();
// navbar.Nav(navContainer);

// // ------------------------> Footer <----------------------

// // let footerContainer = document.getElementById("footer");
// // let footer = new Footer();
// // footer.Footer(footerContainer);
// import {footerHtml} from "./components/compoents.js";
// document.getElementById("footer").innerHTML = footerHtml()

// // let buyNow = document.getElementsByClassName(".payPage");
// // buyNow.addEventListener("click",function(){
// //     // alert("item added on cart");
// //     window.location.href="payment.html" //"payment.html"
    
// // })

import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";

// // console.log("data",data)

display();

function display() {
  let data = JSON.parse(localStorage.getItem("userData")) || [];

  let n22 = document.getElementById("tbs");
  n22.innerHTML = null;
  var tot = 0;
  data.forEach(function (el, index) {
    let tr = document.createElement("tr");
    tr.innerHTML += `
       <td id="photo"><img src=${el.image_url}
      class="prpoo"></td>
       <td id="detidaiss">
        <p>${el.name}</p>
 

     <button class="hatao"><i class="fa-solid fa-xmark"></i> Remove</button>
     </td>
     <td class="daam">₹${el.price}</td>
     <td id="sankhya"><input type="number" id="qutty"></td>
     <td id="joda">₹${el.price}</td>
     
     <hr>`;
    n22.append(tr);
    let btn = tr.querySelector(".hatao");
    btn.addEventListener("click", function () {
      data.splice(index, 1);

      localStorage.setItem("userData", JSON.stringify(data));
      display();
    });
    //  console.log(btn);
    // console.log(el)
    tot += +el.price;
  });
  calci(tot);
}

// // let data = JSON.parse(localStorage.getItem("userData")) || [];
// // function myFunctions(i) {

// //   console.log(data);

// //     let newData = data.filter(function (el, i) {
// //         if (i == index) {
// //             let trash1 = JSON.parse(localStorage.getItem("trashi")) || [];
// //             trash1.push(el);
// //             localStorage.setItem("trashi", JSON.stringify(trash1));
// //             console.log(trash1)
// //         }
// //          else
// //          {
// //             return i != index
// //         }

// //     });

// //     localStorage.setItem("userData", JSON.stringify(newData));
// //     display(newData);
// // }

//    function calci(tot) {

//      let ress = document.getElementById("second");
//     ress.innerHTML = `<tr id="sec">
 
//      <button onclick="myFunction(${index})" id="hatao"><i class="fa-solid fa-xmark"></i> Remove</button>
//      </td>
//      <td id="daam">₹${el.price}</td>
//      <td id="sankhya"><input type="number" id="qutty"></td>
//      <td id="joda">₹${el.price}</td>
//      </tr>
//      <hr>`

//         tot += el.price
//     })
//     calci(tot);
    
   
// }

// function myFunction(index) {
//     let data = JSON.parse(localStorage.getItem("userData")) || [];


//     let newData = data.filter(function (el, i) {
//         if (i == index) {
//             let trash = JSON.parse(localStorage.getItem("trash")) || [];
//             trash.push(el);
//             localStorage.setItem("trash", JSON.stringify(trash));
//         } else {
//             return i !== index;
//         }
//     });

//     localStorage.setItem("userData", JSON.stringify(newData));
//     display(data);
// }

  function calci(tot) {
    let ress = document.getElementById("second");
    ress.innerHTML =
        `<tr id="sec">

          <p class="sec">Total</p>

          <td><p class="sec">₹${tot}</p></td>
        </tr>

        `;

  return tot;
}

let nitti = document.getElementById("code");


nitti.addEventListener("click", function () {

  let data = JSON.parse(localStorage.getItem("userData")) || [];
  let cupon = document.getElementById("texting").value;
  var ppt = 0;
  data.forEach(function (e) {
    ppt += +e.price;
  });
  var top = 0;
  if ((cupon === "SALE") & (ppt >= 600)) {
    top = ppt - Math.floor(ppt * 20) / 100;
  }
  let ress = document.getElementById("second");
     ress.innerHTML =
         `<tr id="sec">
           <p class="sec">Total</p>
           <td><p class="sec">₹${top}</p></td>
         </tr>
         `
  
});



// let nitti = document.getElementById("code");
// nitti.addEventListener("click", function (){
//    let cupon = document.getElementById("texting").value
//    var ppt = 0
//    data.forEach(function (e){
//      ppt+=e.price;

//    })
//    var top=0;
//    if(cupon === "SALE" & ppt >= 600)
//    {
//      top =ppt-(Math.floor(ppt*20)/100)
//    }
//    let ress = document.getElementById("second");
//    ress.innerHTML =
//        `<tr id="sec">

//          <p class="sec">Total</p>

//          <td><p class="sec">₹${top}</p></td>
//        </tr>
// <<<<<<< HEAD
//        `;
// });



// import Navbar from "./components/navbar.js";

// let navContainer = document.getElementById("navbarMen");
// let navbar = new Navbar();
// navbar.Nav(navContainer);



// let footerContainer = document.getElementById("footer");
// let footer = new Footer();
// footer.Footer(footerContainer);
// import {footerHtml} from "./components/compoents.js";
// document.getElementById("footer").innerHTML = footerHtml() 













// let data = JSON.parse(localStorage.getItem("userData")) || [];
// console.log(data)

// display(data);

// function display(data) {
//     let n22 = document.getElementById("tbs");
//     n22.innerHTML = null
//     var tot = 0;
//     data.forEach(function (el, index) {
//         n22.innerHTML += `<tr>
//       <td id="photo"><img src=${el.image_url}
//       class="prpoo"></td>
//        <td id="detidaiss">
//         <p>${el.name}</p>
 
//      <button onclick="myFunction(${index})" id="hatao"><i class="fa-solid fa-xmark"></i> Remove</button>
//      </td>
//      <td id="daam">₹${el.price}</td>
//      <td id="sankhya"><input type="number" id="qutty"></td>
//      <td id="joda">₹${el.price}</td>
//      </tr>
//      <hr>`

//         tot += el.price
//     })
//     calci(tot);
    
   
// }

// function myFunction(index) {
//     let data = JSON.parse(localStorage.getItem("userData")) || [];


//     let newData = data.filter(function (el, i) {
//         if (i == index) {
//             let trash = JSON.parse(localStorage.getItem("trash")) || [];
//             trash.push(el);
//             localStorage.setItem("trash", JSON.stringify(trash));
//         } else {
//             return i !== index;
//         }
//     });

//     localStorage.setItem("userData", JSON.stringify(newData));
//     display(data);
// }

//   function calci(tot) {
//     let ress = document.getElementById("second");
//     ress.innerHTML =
//         `<tr id="sec">
//           <p class="sec">Total</p>
//           <td><p class="sec">₹${tot}</p></td>
//         </tr>
//         `

//         return tot;

// }



// let nitti = document.getElementById("code");
// nitti.addEventListener("click", function (){
//    let cupon = document.getElementById("texting").value
//    var ppt = 0
//    data.forEach(function (e){
//      ppt+=e.price;

//    })
//    var top=0;
//    if(cupon === "SALE" & ppt >= 600)
//    {
//      top =ppt-(Math.floor(ppt*20)/100)
//    }
//    let ress = document.getElementById("second");
//    ress.innerHTML =
//        `<tr id="sec">
//          <p class="sec">Total</p>
//          <td><p class="sec">₹${top}</p></td>
//        </tr>
//        `
   
// })

// let cartData  = JSON.parse(localStorage.getItem("userData"));
// console.log(cartData);

// import Navbar from "./components/navbar.js";

// let navContainer = document.getElementById("navbarMen");
// let navbar = new Navbar();
// navbar.Nav(navContainer);

// // ------------------------> Footer <----------------------

// // let footerContainer = document.getElementById("footer");
// // let footer = new Footer();
// // footer.Footer(footerContainer);
// import {footerHtml} from "./components/compoents.js";
// document.getElementById("footer").innerHTML = footerHtml()

// // let buyNow = document.getElementsByClassName(".payPage");
// // buyNow.addEventListener("click",function(){
// //     // alert("item added on cart");
// //     window.location.href="payment.html" //"payment.html"
    
// // })