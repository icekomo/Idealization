import { gsap } from "gsap";

let white = "#fff";
let darkBlue = "#0D242B";


export let darkModeTL = gsap.timeline({paused:true});
darkModeTL.to(".white-bg",{duration:0.25, backgroundColor: darkBlue},"change")
.to(".blue-txt",{duration:0.25, color:white},"change")
.to(".blue-txt",{duration:0.25, color:white},"change")
.to(".blue-stroke",{duration:0.25, stroke:white},"change")
.to(".blue-fill",{duration:0.25, fill:white},"change")
.to(".white-fill",{duration:0.25, fill: darkBlue},"change");
