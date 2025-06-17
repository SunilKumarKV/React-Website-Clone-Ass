"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-4 md:px-8 text-white py-0">
      <div className="container">
        <div className="fixed bottom-4 right-4 z-20 border border-black bg-white text-black max-sm:left-4 md:bottom-6 md:right-6">
          <div className="max-sm:!w-auto" style={{ width: "13rem" }}>
            <div className="flex h-full flex-col">
              <button
                type="button"
                aria-label="Open Menu"
                onClick={toggleMenu}
                className="flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors justify-between border-b pr-0 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                <span>Menu</span>
                <span className="flex aspect-square h-full items-center justify-center border-l border-l-black">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`size-8 transition-transform ${
                      isMenuOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <path
                      strokeLinecap="square"
                      d="M12 4.5v15m7.5-7.5h-15"
                    ></path>
                  </svg>
                </span>
              </button>

              <div
                className={`-mb-px box-border overflow-hidden transition-all duration-300 ${
                  isMenuOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <nav className="flex flex-col">
                  <a
                    className="group relative flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors border-t hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                    href="/#breakdown"
                  >
                    This is Breakdown
                  </a>
                  <a
                    className="group relative flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors border-t hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                    href="/#donate"
                  >
                    Donate to D!
                  </a>
                  <a
                    className="group relative flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors border-t hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                    href="/#acts-of-emergency"
                  >
                    8 Acts of Emergency
                  </a>
                  <a
                    className="group relative flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors border-t hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                    href="/#latest"
                  >
                    Latest
                  </a>
                  <a
                    className="group relative flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors border-t hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                    href="/#newsletter"
                  >
                    Newsletter
                  </a>
                  <a
                    className="group relative flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors border-t hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                    href="/#signatories"
                  >
                    Signatories
                  </a>
                </nav>
              </div>

              <a
                className="group relative flex h-12 w-full items-center gap-x-3 border-black px-3 transition-colors border-t hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                href="/#declaration"
              >
                Declare Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
