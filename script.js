// Wait until page fully loads
document.addEventListener("DOMContentLoaded", function () {
  // 🌙 Dark Mode Toggle
  const darkModeBtn = document.getElementById("darkModeBtn");
  if (darkModeBtn) {
    darkModeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      // Change button text dynamically
      if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀️ Light Mode";
      } else {
        darkModeBtn.textContent = "🌙 Dark Mode";
      }
    });
  }

  // 🎉 Alert Button
  const alertBtn = document.getElementById("alertBtn");
  if (alertBtn) {
    alertBtn.addEventListener("click", function () {
      alert("Hello! 🎉 You just triggered a JavaScript alert!");
    });
  }
});
