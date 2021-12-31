import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin,MorphSVGPlugin);

// let line = document.getElementById("line")
// let lineWidth = line.getBoundingClientRect().width;
// console.log(lineWidth)

// let sunShape = document.getElementById("sun-shape")
// let sunWidth = sunShape.getBoundingClientRect().width;
// console.log(sunWidth)

// let distanceToMove = lineWidth - (sunWidth / 2);
// console.log(distanceToMove)

const logoTL = new gsap.timeline();
logoTL.from("#outline-white",{duration:0.25,drawSVG:0},"same")
.from("#logoClip",{duration:0.25, scaleY:0, delay:0.15},"same")
// .to("header",{duration:0.25, backgroundColor:"#333"},"same");

const modeTL = new gsap.timeline();
modeTL.to("#moon",{duration:0.25, morphSVG:"#sun-shape"},"mode")
.to("#mode-content",{duration:0.25, rotate:180, x:"+=8", transformOrigin: "center"},"mode")
.from("#rays",{duration:0.25, scale:0, transformOrigin: "center"},"mode")

const envelopeTL = new gsap.timeline();
envelopeTL.from("#e-outline-white",{duration:0.25,drawSVG:0},"same")
.from("#flap-white",{duration:0.25,drawSVG:0},"same")

export const headerTL = new gsap.timeline({paused:true});

headerTL.add(logoTL,"header")
.add(envelopeTL,"header")
.add(modeTL, "header");