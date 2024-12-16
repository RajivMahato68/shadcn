
// Utility to combine class names conditionally (e.g., for dynamic styles)
export function cn(...classes) {
    return classes.filter(Boolean).join(' ')
}

// Utility to toggle a class on a specific element (can be used for dropdown menu toggle)
export function toggleClass(element, className) {
    if (element) {
        element.classList.toggle(className)
    }
}

// Utility to detect the current theme (for example, to toggle between dark/light modes)
export function getTheme() {
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    const storedTheme = localStorage.getItem('theme') || systemPreference
    return storedTheme
}
