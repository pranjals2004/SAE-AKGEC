// Small interaction (for button clicks)
document.addEventListener("DOMContentLoaded", () => {
  const aboutBtn = document.querySelector(".about");
  const joinBtn = document.querySelector(".join");

  joinBtn.addEventListener("click", () => {
    alert("Redirecting to Join Us form...");
  });
});
