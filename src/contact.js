import {sayWhisky} from "./smile.js";

const text = sayWhisky("whisky");
const bdy = document.querySelector("body");

const varr = document.createElement("div");
varr.classList.add("paragraph-contact");
varr.innerHTML = "Surprise"

const photo= document.createElement("div");
photo.classList.add("paragraph-contact");
photo.innerHTML = text;


bdy.appendChild(varr);
bdy.appendChild(photo);