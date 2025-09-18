"use client";

import { useEffect, useState } from "react";
import { HeadingH5, ButtonText, NavLink } from "@/components/Typography";
import { Button } from "@/components/Button";
import DownloadIcon from "@/components/Icons/DownloadIcon";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onEsc);
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header className={`sticky top-0 z-50 bg-white backdrop-blur transition-all duration-300 ${
      isScrolled ? "shadow-md" : ""
    }`}>
      <div
        className={`container mx-auto px-6 xl:px-28 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "py-2" : "py-8 md:py-8"
        }`}
      >
        <a href="/" className="flex gap-3 items-center">
          {/* Logo */}
          <svg
            width="24"
            height="36"
            viewBox="0 0 24 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M23.5294 12.2118C23.5294 16.8819 20.7623 20.9082 16.7793 22.7351C18.4612 21.3496 19.5322 19.248 19.5322 16.896C19.5322 12.7642 16.2259 9.40423 12.112 9.32046C12.0574 9.3167 12.0075 9.3167 11.9529 9.3167C11.8983 9.3167 11.8485 9.3167 11.7939 9.32046C10.2673 9.40328 9.05882 10.6663 9.05882 12.2108V26.6814C9.05882 31.4748 5.16988 35.3638 0.376465 35.3638V12.2118C0.376465 5.81928 5.56047 0.635284 11.9529 0.635284C18.3454 0.635284 23.5294 5.81928 23.5294 12.2118Z" fill="black"/>
            <path d="M13.9992 14.2582C15.1294 13.128 15.1294 11.2956 13.9992 10.1654C12.8689 9.03515 11.0365 9.03515 9.90629 10.1654C8.77608 11.2956 8.77608 13.128 9.90629 14.2582C11.0365 15.3884 12.8689 15.3884 13.9992 14.2582Z" fill="black"/>
          </svg>
          <HeadingH5 level={5} weight="bold">Personal</HeadingH5>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/#about">About Me</NavLink>
          <NavLink href="/#skills">Skills</NavLink>
          <NavLink href="/#project">Project</NavLink>
          <NavLink href="/#contact">Contact me</NavLink>
        </nav>

        {/* Resume button (desktop only) */}
        <div className="hidden md:block">
          <Button
            size="medium"
            iconPosition="right"
            variant="solid"
            icon={<DownloadIcon />}
          >
            <ButtonText weight="semibold">Resume</ButtonText>
          </Button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="fixed left-0 right-0 top-[72px] bg-white animate-slide-down z-[60]">
            <div className="px-6 py-6 flex flex-col gap-5">
              <nav className="flex flex-col gap-4 text-lg">
                <NavLink href="/#about" onClick={close}>About Me</NavLink>
                <NavLink href="/#skills" onClick={close}>Skills</NavLink>
                <NavLink href="/#project" onClick={close}>Project</NavLink>
                <NavLink href="/#contact" onClick={close}>Contact me</NavLink>
              </nav>
              <Button
                size="medium" 
                iconPosition="right"
                variant="solid"
                icon={<DownloadIcon />}
                onClick={close}
              >
                <ButtonText weight="semibold">Resume</ButtonText>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
