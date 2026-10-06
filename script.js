const button = document.getElementById("b1");
const theme = document.getElementById("theme");

button.addEventListener("click", () => {
    if (theme.getAttribute("href") === "style.css") {
        theme.setAttribute("href", "style1.css");
    } else {
        theme.setAttribute("href", "style.css");
    }
});
