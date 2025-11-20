"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useTheme } from "../providers";

const navLinks = [
  { label: "Home", href: "#", isActive: true },
  { label: "Team", href: "#team", isActive: false },
  { label: "Our Works", href: "#works", isActive: false },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const themeToggleStyles = isDark
    ? "border-white/20 text-white hover:border-white/40"
    : "border-slate-900/20 text-slate-900 hover:border-slate-900/40";

  const getStartedClasses = isDark
    ? "bg-white text-[#0b0b2c]"
    : "bg-[#05010e] text-white";

  const headerClasses = "bg-transparent";

  const navClasses = isScrolled
    ? isDark
      ? "border-white/20 bg-[rgba(5,5,15,0.85)] text-white shadow-lg backdrop-blur"
      : "border-slate-900/10 bg-white text-slate-900 shadow-lg"
    : isDark
      ? "border-white/20 bg-transparent text-white"
      : "border-slate-900/20 bg-white/70 text-slate-900 shadow-sm";

  const burgerButtonClasses = isDark
    ? "border-white/20 text-white hover:border-white/40"
    : "border-slate-900/20 text-slate-900 hover:border-slate-900/40";

  const mobileSheetClasses = isDark
    ? "bg-[#051027] text-white"
    : "bg-white text-slate-900";

  const mobileDivider = isDark ? "border-white/10" : "border-slate-200";

  const mobileGetStartedClasses = isDark
    ? "bg-white text-[#0b0b2c]"
    : "bg-[#05010e] text-white";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-transparent backdrop-blur-xl transition-all duration-300 ${headerClasses}`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <span
            className={`text-2xl font-semibold tracking-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            WeDev
          </span>
        </Link>

        <nav
          className={`hidden rounded-full border px-6 py-2 text-sm font-medium transition-all duration-300 md:flex md:gap-8 ${navClasses}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors ${
                link.isActive
                  ? isDark
                    ? "text-white font-semibold"
                    : "text-slate-900 font-semibold"
                  : isDark
                    ? "text-white/70 hover:text-white"
                    : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${themeToggleStyles}`}
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m0 13.5V21m9-9h-2.25M5.25 12H3m16.364 6.364-1.591-1.591M6.227 6.227 4.636 4.636m14.728 0-1.591 1.591M6.227 17.773l-1.591 1.591M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.75A8.25 8.25 0 0 1 11.25 3 8.25 8.25 0 1 0 21 12.75Z"
                />
              </svg>
            )}
          </button>
          <Link
            href="#contact"
            className={`rounded-full px-5 py-2 text-sm font-medium shadow-lg transition hover:-translate-y-0.5 ${getStartedClasses}`}
          >
            Get Started
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${themeToggleStyles}`}
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m0 13.5V21m9-9h-2.25M5.25 12H3m16.364 6.364-1.591-1.591M6.227 6.227 4.636 4.636m14.728 0-1.591 1.591M6.227 17.773l-1.591 1.591M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.75A8.25 8.25 0 0 1 11.25 3 8.25 8.25 0 1 0 21 12.75Z"
                />
              </svg>
            )}
          </button>
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-full border p-2 transition ${burgerButtonClasses}`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mounted && isOpen &&
        createPortal(
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div
            className={`absolute inset-x-0 bottom-0 rounded-t-[32px] border border-white/10 px-6 pb-8 pt-6 shadow-2xl shadow-black/50 ${mobileSheetClasses}`}
          >
            <div className="mx-auto h-1.5 w-14 rounded-full bg-white/30" />
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] opacity-70">
                  Navigation
                </p>
                <p className="text-2xl font-semibold">WeDev</p>
              </div>
              <button
                type="button"
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${burgerButtonClasses}`}
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="mt-6 text-lg font-semibold">
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`flex items-center justify-between py-4 ${index !== navLinks.length - 1 ? `border-b ${mobileDivider}` : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span
                    className={
                      link.isActive ? "font-bold tracking-wide" : "font-medium"
                    }
                  >
                    {link.label}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9 5 7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}
            </nav>

            <button
              type="button"
              onClick={toggleTheme}
              className={`mt-6 flex w-full items-center justify-center rounded-full border transition ${themeToggleStyles}`}
            >
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m0 13.5V21m9-9h-2.25M5.25 12H3m16.364 6.364-1.591-1.591M6.227 6.227 4.636 4.636m14.728 0-1.591 1.591M6.227 17.773l-1.591 1.591M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12.75A8.25 8.25 0 0 1 11.25 3 8.25 8.25 0 1 0 21 12.75Z"
                  />
                </svg>
              )}
            </button>

            <Link
              href="#contact"
              className={`mt-6 rounded-full px-4 py-3 text-center text-base font-semibold shadow ${mobileGetStartedClasses}`}
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}