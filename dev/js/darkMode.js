import { gsap } from "gsap";

let white = "#fff";
let darkBlue = "#0D242B";
let cardBlue = "#143641";
let cardCircle = "#1D5060";


export let darkModeTL = gsap.timeline({paused:true});
darkModeTL.to(".white-bg",{duration:0.25, backgroundColor: darkBlue},"change")
.to(".blue-txt",{duration:0.25, color:white},"change")
// .to(".blue-txt",{duration:0.25, color:white},"change")
// .to(".blue-stroke",{duration:0.25, stroke:white},"change")
.to(".blue-fill",{duration:0.25, fill:white},"change")
// .to(".blue-fill",{duration:0.25, fill:white},"change")
.to(".card-gray",{duration:0.25, backgroundColor: cardBlue},"change")
.to(".card-circle",{duration:0.25, backgroundColor: cardCircle},"change");



