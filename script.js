const button = document.getElementById(“b1”);
const theme = document.getElementById(“theme”);

// Restore saved theme
const savedTheme = localStorage.getItem(“todo-theme”);

if (theme) {
theme.setAttribute(
“href”,
savedTheme === “light” ? “style1.css” : “style.css”
);
}

// Register click handler once
if (
button &&
theme &&
button.dataset.themeHandlerAttached !== “true”
) {
button.dataset.themeHandlerAttached = “true”;

button.addEventListener("click", () => {
    const isDarkMode =
        theme.getAttribute("href") === "style.css";
    const nextTheme = isDarkMode ? "light" : "dark";
    // Apply selected theme
    theme.setAttribute(
        "href",
        nextTheme === "light" ? "style1.css" : "style.css"
    );
    // Save theme preference
    localStorage.setItem("todo-theme", nextTheme);
});

}
