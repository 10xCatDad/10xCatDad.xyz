(() => {
  const root = document.documentElement;
  const choices = document.querySelectorAll('[data-theme-choice]');
  const system = window.matchMedia('(prefers-color-scheme: light)');
  let preference = root.dataset.themePreference || 'dark';

  function applyTheme() {
    const theme = preference === 'system' ? (system.matches ? 'light' : 'dark') : preference;
    root.dataset.theme = theme;
    root.dataset.themePreference = preference;
    root.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#000000' : '#f3f4f7';
    choices.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.themeChoice === preference)));
  }

  choices.forEach(button => button.addEventListener('click', () => {
    preference = button.dataset.themeChoice;
    try { localStorage.setItem('10xcatdad-theme', preference); } catch { /* Keep the selection for this page. */ }
    applyTheme();
  }));
  system.addEventListener('change', () => { if (preference === 'system') applyTheme(); });
  window.addEventListener('storage', event => {
    if (event.key === '10xcatdad-theme' || event.key === null) {
      preference = ['dark', 'light', 'system'].includes(event.newValue) ? event.newValue : 'dark';
      applyTheme();
    }
  });
  applyTheme();
  document.querySelector('.theme-switch').hidden = false;
})();
