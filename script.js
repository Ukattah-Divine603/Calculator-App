
// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check user preference from localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
}

// Toggle dark mode
darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});