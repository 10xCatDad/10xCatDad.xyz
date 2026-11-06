(() => {
  let preference = 'dark';
  try {
    const saved = localStorage.getItem('10xcatdad-theme');
    if (['dark', 'light', 'system'].includes(saved)) preference = saved;
  } catch { /* Theme controls still work when storage is unavailable. */ }
  const theme = preference === 'system'
    ? (window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    : preference;
  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.themePreference = preference;
  document.documentElement.style.colorScheme = theme;
})();
