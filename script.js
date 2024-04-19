const btn = document.querySelector(".themeBtn");

// Function to toggle theme
function toggleTheme() {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    btn.textContent = "White";
    localStorage.setItem("theme", "dark");
  } else {
    btn.textContent = "Dark";
    localStorage.setItem("theme", "light");
  }
}

// Check if theme preference is saved in local storage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  toggleTheme(); // Apply dark theme
}

// Event listener for button click
btn.addEventListener("click", toggleTheme);
