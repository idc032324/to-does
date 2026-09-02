const button = document.getElementById("designButton");
const theme = document.getElementById("theme");

button.addEventListener("click", () => {
    if (theme.getAttribute("href") === "style1.css") {
        theme.setAttribute("href", "style2.css");
    } else {
        theme.setAttribute("href", "style1.css");
    }
});
