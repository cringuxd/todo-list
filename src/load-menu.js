import { container } from "./index.js"

function loadMenuPage() {
    const para = document.createElement("p");
    para.textContent = "This is our menu! Feel free to browse our amazing delicacies!"
    container.appendChild(para);
}

export {loadMenuPage};