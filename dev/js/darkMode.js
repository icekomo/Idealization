import { gsap } from "gsap";


export let darkModeTL = gsap.timeline({paused:true});
darkModeTL.to(".white-bg",{duration:0.25, backgroundColor:"#0D242B"},"change")
.to(".blue-txt",{duration:0.25, color:"#fff"},"change")
.to(".blue-stroke",{duration:0.25, stroke:"#fff"},"change")
.to(".blue-fill",{duration:0.25, fill:"#fff"},"change");
