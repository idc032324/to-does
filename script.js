const button = document.getElementById(“b1”);
const theme = document.getElementById(“dark”);

button.addEventListener(“click”, () => {
if (theme.getAttribute(“href”) === “style.css”) {
theme.setAttribute(“href”, “style1.css”);
//localStorage.removeItem("theme");
//localStorage.setItem("theme", "light");
} else {
theme.setAttribute(“href”, “style.css”);
//localStorage.removeItem("theme");
//localStorage.setItem("theme", "dark");
}
});


//document.addEventListener("DOMContentLoaded", () => {
//if (theme === “light”) {
//theme.setAttribute(“href”, “style1.css”);
//} else {
//theme.setAttribute(“href”, “style.css”);
//}
//});
