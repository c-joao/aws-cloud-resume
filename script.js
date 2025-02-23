const toggle = document.getElementById("theme-toggle");
const body = document.body;

// Check if dark mode is already set (using localStorage to remember theme preference)
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggle.checked = true;  // Set the toggle to "checked" for dark mode
}

// Add an event listener to toggle the theme
toggle.addEventListener("change", () => {
  body.classList.toggle("dark-mode");

  // Save the current theme in localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
