import { container } from "./index.js"

function loadContactsPage() {
    const para = document.createElement("p");
    para.textContent = "This is our contacts page!"
    container.appendChild(para);
}

export {loadContactsPage};