// Store and retrieve user preferences
function savePreference(key, value) {
  localStorage.setItem(key, value);
}

function getPreference(key) {
  return localStorage.getItem(key);
}

// Theme management
function applySavedTheme() {
  const savedTheme = getPreference("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const currentTheme = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";
  savePreference("theme", currentTheme);
}

// Animation trigger
function startAnimation() {
  const box = document.getElementById("animationTarget");
  box.classList.add("spin-animation");

  // Remove animation class after completion
  box.addEventListener(
    "animationend",
    () => {
      box.classList.remove("spin-animation");
    },
    { once: true }
  );
}

// Initialize on load
window.onload = function () {
  applySavedTheme();
};
