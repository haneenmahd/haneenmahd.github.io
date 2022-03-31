/**
 * Detects the browser preferred theme and returns it
 *
 * @returns {"light" | "dark"} The theme
 */
export function detectTheme() {
  let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

  return isDarkMode ? 'dark' : 'light'
}
