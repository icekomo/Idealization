import { gsap } from "gsap";

let white = "#fff";
// let darkBlue = "#0D242B";
let darkGray = "#222831";

let gray = "#2F3947";

// let cardBlue = "#143641";
let cardBlue = "#393E46";

// let cardCircle = "#1D5060";
let cardCircle = "#EEEEEE";

let nightTimeHero = document.querySelector("#night-time-hero");
gsap.set(nightTimeHero,{alpha:0});

let nightTimeRenderings = document.querySelectorAll(".dark-mode");
gsap.set(nightTimeRenderings,{alpha:0});



export let darkModeTL = gsap.timeline({paused:true});
// darkModeTL.to(".white-bg",{duration:0.25, backgroundColor: charcoal},"change")
// .to(".blue-txt",{duration:0.25, color:white},"change")
// .to(".blue-fill",{duration:0.25, fill:white},"change")
// .to(".card-gray",{duration:0.25, backgroundColor: cardBlue},"change")
// .to(".card-circle",{duration:0.25, backgroundColor: cardCircle},"change")
//.to(".card-circle",{duration:0.25, color: charcoal},"change")


darkModeTL.to(":root",{duration:0.25, "--dark-gray": white},"change")
.to(":root",{duration:0.25, "--white": darkGray},"change")
.to(":root",{duration:0.25, "--light-gray": gray},"change")

.to(nightTimeHero,{duration:0.25, alpha:1},"change")
.to(nightTimeRenderings,{duration:0.25, alpha:1},"change");

