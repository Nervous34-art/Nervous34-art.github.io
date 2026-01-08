document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.getElementById('toggleBtn');
  const sidebar = document.getElementById('sidebar');
  const themeBtn = document.getElementById('themeToggle');
  const links = document.querySelectorAll('.sidebar nav a');
  const current = window.location.pathname.split("/").pop();

  // Mini sidebar toggle
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
  });

  // Auto-active link
  links.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme === 'dark'){
    document.body.classList.add('dark');
    themeBtn.textContent = 'Light Mode';
  }

  // Theme toggle
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
      themeBtn.textContent = 'Light Mode';
      localStorage.setItem('theme','dark');
    } else {
      themeBtn.textContent = 'Dark Mode';
      localStorage.setItem('theme','light');
    }
  });
});
