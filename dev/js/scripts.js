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


// Open / Copy Email

let openEmailBtn = document.querySelector(".openEmailBtn");

openEmailBtn.addEventListener("click", function(){
    window.location.href = 'mailto:josh@gdovindesigns.com?subject=Let%20get%20Started!';

    contactTL.reverse();
    canSeeContact = false;
})




let copyEmailBtn = document.querySelector("#copyEmailBtn");

copyEmailBtn.addEventListener("click",function(){

    var emailTxt = document.createElement("input");
    document.body.appendChild(emailTxt);
    emailTxt.setAttribute('value', "josh@gdovindesigns.com");
    emailTxt.select();
    document.execCommand('copy');
    document.body.removeChild(emailTxt);

    contactTL.reverse();
    canSeeContact = false;

})