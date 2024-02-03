import { Fancybox} from "@fancyapps/ui";

import { headerTL } from "./headerAnimations.js";
import { darkModeTL } from "./darkMode.js";
import { contactTL } from "./contact.js";


let darkMode = false;
let darkBtn = document.querySelector("#mode-btn");
darkBtn.addEventListener("click",function(){
    if(darkMode === false){
        headerTL.play();
        darkMode = true;
        // darkMode timelines
        darkModeTL.play();
    }else{
        headerTL.reverse();
        darkMode = false;
        // darkMode timelines
        darkModeTL.reverse();
    }
});

let canSeeContact = false;

let contactBtn = document.querySelectorAll(".contact-btn");
for(let i = 0; i<contactBtn.length; i ++){
    contactBtn[i].addEventListener("click",e =>{

        if(e.target !== e.currentTarget){
            console.log("child clicked") 
        }else{
            console.log("parent clicked") 
        }

        if(canSeeContact === false){
            contactTL.play();
            canSeeContact = true;

        }else{
            contactTL.reverse();
            canSeeContact = false;
        }
    });
}

let contact = document.querySelector("#contact");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == contact) {
    //   modal.style.display = "none";
    contactTL.reverse();
            canSeeContact = false;
    }
  }


// let contactBG = document.querySelector("#contact-bg");
// contactBG.addEventListener("click",function(){
//     console.log("fade")
//     contactTL.reverse();
//     canSeeContact = false;
// });






// import { gsap } from "gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// gsap.registerPlugin(ScrollToPlugin);

// let scrollMarkers = ["#hero", "#believe","#gallery","#callout"];
// let navButtons = document.querySelectorAll(".nav-button");

// // get the height of the logo to use at the offset
// let header = document.querySelector("#header-content");
// let headerHeight = header.offsetHeight;


// console.log(headerHeight);

// for (const marker of navButtons) {
//     marker.addEventListener("click", function(e){
//         // this will tell you which button was clicked on
//         const indexValue = [].indexOf.call(navButtons, e.target);
//         // this will use that information of which button was clicked on and scroll to that id
//         gsap.to(window, {duration: 1, scrollTo:{y:scrollMarkers[indexValue], offsetY:headerHeight}});
//         // close the menu only if the menu is visible
//         if(canSeeMenu){
//             openCloseMenu();
//         }
//     });
// }

// /* -----------------------------
//         Navigation
//  ----------------------------- */   
// let nav = document.querySelector("nav");
// let canSeeMenu = false;

// let burgerButton = document.querySelector("#burger-button");
// burgerButton.addEventListener("click", openCloseMenu);

// // function to handle opening and closing the menu
// function openCloseMenu(){
//     if(!canSeeMenu){
//         nav.style.display = 'block';
//         canSeeMenu = true;
//         //remove the burger and add a close icon
//         document.getElementById("burger-button").classList.remove('fa-bars');
//         document.getElementById("burger-button").classList.add('fa-times-circle');
//     }else{
//         nav.style.display = 'none';
//         canSeeMenu = false;
//         //add the burger and remove a close icon
//         document.getElementById("burger-button").classList.remove('fa-times-circle');
//         document.getElementById("burger-button").classList.add('fa-bars');
//     }
// }