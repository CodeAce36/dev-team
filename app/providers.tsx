"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { HeroUIProvider } from "@heroui/react";

type ThemeMode = "light" | "dark";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
};

const THEME_STORAGE_KEY = "dev-team-theme";

const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  toggleTheme: () => {},
  setTheme: () => {},
});

const getInitialTheme = (): ThemeMode => {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export function useTheme() {
  return useContext(ThemeContext);
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(mode);
    root.style.setProperty("color-scheme", mode);

    window.localStorage.setItem(THEME_STORAGE_KEY, mode);
  }, [mode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (stored !== "light" && stored !== "dark") {
        setMode(event.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const value = useMemo(
    () => ({
      isDark: mode === "dark",
      toggleTheme: () => setMode((prev) => (prev === "dark" ? "light" : "dark")),
      setTheme: (newMode: ThemeMode) => setMode(newMode),
    }),
    [mode]
  );

  return (
    <HeroUIProvider>
      <ThemeContext.Provider value={value}>
        <main
          className={`${mode} min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)] transition-colors duration-300`}
        >
          {children}
        </main>
      </ThemeContext.Provider>
    </HeroUIProvider>
  );
}

