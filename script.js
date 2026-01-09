document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleBtn");
  const themeBtn = document.getElementById("themeToggle");
  const links = document.querySelectorAll(".sidebar nav a");

  /* =========================
     SIDEBAR TOGGLE (with icon update)
  ========================= */
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      const isCollapsed = sidebar.classList.toggle("collapsed");
      
      // Update the icon based on state
      if (isCollapsed) {
        toggleBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
      } else {
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  }

  /* =========================
     ACTIVE LINK
  ========================= */
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  
  links.forEach(link => {
    // Handle both exact matches and partial matches
    const linkHref = link.getAttribute("href");
    const isActive = linkHref === currentPage || 
                     (currentPage === "" && linkHref === "index.html");
    
    link.classList.toggle("active", isActive);
  });

  /* =========================
     THEME SYSTEM
  ========================= */
  if (themeBtn) {
    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Priority: localStorage > system preference > light
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.body.classList.add("dark");
      themeBtn.textContent = "☀️ Light Mode";
    } else {
      themeBtn.textContent = "🌙 Dark Mode";
    }

    /* =========================
       THEME TOGGLE
    ========================= */
    themeBtn.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark");
      themeBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }
});
