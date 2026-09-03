/**
 * Inject Theme CSS Custom Properties into document element (:root).
 * Enables complete instant visual re-skinning (colors, backgrounds, text, typography, radii, glass)
 */
export const injectThemeVariables = (theme) => {
  if (typeof document === 'undefined' || !theme) return;

  const root = document.documentElement;

  // Primary Colors
  if (theme.colors?.primary) {
    const p = theme.colors.primary;
    root.style.setProperty('--color-primary', typeof p === 'string' ? p : p.DEFAULT);
    if (p.light) root.style.setProperty('--color-primary-light', p.light);
    if (p.dark) root.style.setProperty('--color-primary-dark', p.dark);
    if (p.foreground) root.style.setProperty('--color-primary-fg', p.foreground);
  }

  // Secondary Colors
  if (theme.colors?.secondary) {
    const s = theme.colors.secondary;
    root.style.setProperty('--color-secondary', typeof s === 'string' ? s : s.DEFAULT);
    if (s.light) root.style.setProperty('--color-secondary-light', s.light);
    if (s.foreground) root.style.setProperty('--color-secondary-fg', s.foreground);
  }

  // Accent Colors
  if (theme.colors?.accent) {
    const a = theme.colors.accent;
    root.style.setProperty('--color-accent', typeof a === 'string' ? a : a.DEFAULT);
    if (a.light) root.style.setProperty('--color-accent-light', a.light);
  }

  // Surface & Page Backgrounds
  if (theme.colors?.surface) {
    const surf = theme.colors.surface;
    if (surf.DEFAULT) root.style.setProperty('--color-surface', surf.DEFAULT);
    if (surf.muted) root.style.setProperty('--color-surface-muted', surf.muted);
    if (surf.card) root.style.setProperty('--color-surface-card', surf.card);
    if (surf.glass) root.style.setProperty('--color-surface-glass', surf.glass);
  }

  // Text Colors
  if (theme.colors?.text) {
    if (theme.colors.text.primary) root.style.setProperty('--color-text-primary', theme.colors.text.primary);
    if (theme.colors.text.secondary) root.style.setProperty('--color-text-secondary', theme.colors.text.secondary);
  }

  // Border Color
  if (theme.colors?.border) {
    root.style.setProperty('--color-border', theme.colors.border);
  }

  // Radii
  if (theme.radius) {
    if (theme.radius.brand) root.style.setProperty('--radius-brand', theme.radius.brand);
    if (theme.radius.card) root.style.setProperty('--radius-card', theme.radius.card);
    if (theme.radius.btn) root.style.setProperty('--radius-btn', theme.radius.btn);
  }

  // Fonts
  if (theme.typography) {
    if (theme.typography.heading) root.style.setProperty('--font-heading', theme.typography.heading);
    if (theme.typography.body) root.style.setProperty('--font-body', theme.typography.body);
  }

  // Glassmorphism Intensity
  if (theme.glass) {
    if (theme.glass.blur) root.style.setProperty('--glass-blur', theme.glass.blur);
    if (theme.glass.border) root.style.setProperty('--glass-border-color', theme.glass.border);
  }
};

export default injectThemeVariables;
