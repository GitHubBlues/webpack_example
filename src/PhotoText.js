import {sayWhisky} from "./smile.js";

const text = sayWhisky("whisky");

function takePhoto() {

    return ("Smile for photo. Say: " + text) ;
}

export { takePhoto }
