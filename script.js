const button = document.getElementById(“b1”);
const theme = document.getElementById(“theme”);

// Restore saved theme
const savedTheme = localStorage.getItem(“todo-theme”);

if (savedTheme === “light”) {
theme.setAttribute(“href”, “style1.css”);
} else if (savedTheme === “dark”) {
theme.setAttribute(“href”, “style.css”);
}

// Toggle theme
button.addEventListener(“click”, () => {
if (theme.getAttribute(“href”) === “style.css”) {
theme.setAttribute(“href”, “style1.css”);

    // Save light mode
    localStorage.setItem("todo-theme", "light");
} else {
    theme.setAttribute("href", "style.css");
    // Save dark mode
    localStorage.setItem("todo-theme", "dark");
}

});
