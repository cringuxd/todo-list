//Load the home page
import {container} from "./index.js";


function loadHomePage() {
    //list of home page elements:
    /*
    - background color

    */
   const para = document.createElement("p");
   para.textContent = "This is a wonderful restauraunt, we serve you amazing food in exchange for money."
   container.appendChild(para);
}

export { loadHomePage };