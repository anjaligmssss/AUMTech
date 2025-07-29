// const toggle = document.getElementById("themeToggle");

// toggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
// });



  const toggleBtn = document.getElementById('themeToggle');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.textContent = '☀️';
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

