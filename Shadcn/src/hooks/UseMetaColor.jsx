import { useState, useEffect, useMemo, useCallback } from "react";

import { META_THEME_COLORS } from "../../config/Site";

export function useMetaColor() {
  // Initialize theme from localStorage or default to light
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme || "light"; // Default to light if no theme is saved
    }
    return "light";
  });

  // Memoize the meta color based on the current theme
  const metaColor = useMemo(() => {
    return theme !== "dark" ? META_THEME_COLORS.light : META_THEME_COLORS.dark;
  }, [theme]);

  // Update the meta theme color in the document
  const setMetaColor = useCallback((color) => {
    const metaTag = document.querySelector('meta[name="theme-color"]');
    if (metaTag) {
      metaTag.setAttribute("content", color);
    }
  }, []);

  // Set the meta color whenever the theme changes
  useEffect(() => {
    setMetaColor(metaColor);
    document.documentElement.setAttribute("data-theme", theme); // Set the theme attribute on html element
    localStorage.setItem("theme", theme); // Save the theme in localStorage
  }, [metaColor, theme, setMetaColor]);

  return {
    metaColor,
    setMetaColor,
    theme,
    setTheme, // Provide a way to change the theme
  };
}
