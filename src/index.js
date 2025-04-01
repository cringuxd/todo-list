import "./styles.css"
import { loadHomePage } from "./load-home.js"
import { loadMenuPage } from "./load-menu.js"
import { loadContactsPage } from "./load-contacts.js"

const container = document.querySelector("#content");
loadHomePage();

const homeButton = document.querySelector(".home")
const menuButton = document.querySelector(".menu")
const contactButton = document.querySelector(".contacts")

homeButton.addEventListener("click", () => {
    destroyPage();
    loadHomePage();
}
);

menuButton.addEventListener("click", () => {
    destroyPage();
    loadMenuPage();
}
);

contactButton.addEventListener("click", () => {
    destroyPage();
    loadContactsPage();
}
)

function destroyPage() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

export {container};