import {takePhoto} from './PhotoText.js';

const bdy = document.querySelector("body");
const text = takePhoto();

const varr = document.createElement("div");
varr.classList.add("paragraph-welcome");
varr.innerHTML = "So here we could have a lot to say about food, love and chefs ... But we will leave that for another day"

const photo= document.createElement("div");
photo.classList.add("paragraph-welcome");
photo.innerHTML = text;


bdy.appendChild(varr);
bdy.appendChild(photo);

