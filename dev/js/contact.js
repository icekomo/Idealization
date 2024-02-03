import { gsap } from "gsap";

let contact = document.querySelector("#contact");
let contactHeight = contact.offsetHeight;
// gsap.set(contact,{zIndex: -1});
// console.log(contactHeight);

let header = document.querySelector("header");
let headerHeight = header.offsetHeight;
console.log(headerHeight);

// move contact off screen
gsap.set("#contact",{y:-contactHeight});

export let contactTL = gsap.timeline({paused:true});
contactTL.to("#contact",{y:0, duration:0.25, zIndex:1000},'contact')
.to("header",{y:-headerHeight, duration:0.25},"contact")
.from("#contact >div",{alpha:0, y:"+=100", duration:0.25});