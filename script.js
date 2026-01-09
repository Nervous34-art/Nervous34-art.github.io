document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleBtn");
  const themeBtn = document.getElementById("themeToggle");
  const links = document.querySelectorAll(".sidebar nav a");

  /* =========================
     SIDEBAR TOGGLE
  ========================= */
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });
  }

  /* =========================
     ACTIVE LINK
  ========================= */
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  links.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === currentPage
    );
  });

  /* =========================
     THEME LOAD
  ========================= */
  if (themeBtn) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      themeBtn.textContent = "Light Mode";
    }

    /* =========================
       THEME TOGGLE
    ========================= */
    themeBtn.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark");
      themeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }
});
