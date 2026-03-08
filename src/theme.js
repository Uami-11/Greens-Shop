/* ================================================================
   theme.js — Light/dark mode toggle
   Reads and saves the user's preference to localStorage.
   ================================================================ */

(function () {
  const STORAGE_KEY = 'arcane-theme';

  // Apply saved theme immediately (before the page renders)
  // so there's no flash of the wrong theme on load
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'light') {
    document.body.classList.add('light');
  }

  // Wait for the DOM to be ready before inserting the button
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.createElement('button');
    btn.id          = 'theme-toggle';
    btn.title       = 'Toggle light / dark mode';
    btn.textContent = document.body.classList.contains('light') ? '🌙' : '🌿';

    btn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light');
      // 🌙 = switch to dark   🌿 = switch to light
      btn.textContent = isLight ? '🌙' : '🌿';
      localStorage.setItem(STORAGE_KEY, isLight ? 'light' : 'dark');
    });

    document.body.appendChild(btn);
  });
})();