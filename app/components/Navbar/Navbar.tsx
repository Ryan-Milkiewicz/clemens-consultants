"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { NAV_ITEMS } from "./NavLinks";
import { ChevronDown, HamburgerIcon } from "./NavbarIcons";
import "./Navbar.css";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const UTILITY_LINKS = [{ label: "(518) 960-9227", href: "tel:5189609227" }];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const activeItem = NAV_ITEMS.find((i) => i.label === activeMenu);

  return (
    <nav className="tbg-nav-root" ref={navRef} aria-label="Main navigation">
      {/* Utility Bar */}
      <div className="tbg-utility">
        {UTILITY_LINKS.map((l) => (
          <Link key={l.label} href={l.href}>
            {l.label}
          </Link>
        ))}
      </div>

      {/* Main Bar */}
      <div
        className="tbg-main"
        style={{ boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none" }}
      >
        <Link
          href="/"
          className="tbg-logo"
          aria-label="Clemens Consultants Home"
        >
          <Image
            src="/clemens-consultants-logo.png"
            alt="Clemens Consultants Logo"
            width={200}
            height={45}
            priority
            className="tbg-logo-img"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="tbg-nav-links">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="tbg-nav-item"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className={`tbg-nav-trigger${activeMenu === item.label ? " active" : ""}`}
                aria-expanded={activeMenu === item.label}
                onClick={(e) => {
                  if (item.sections?.length) {
                    // allow navigation, just close the menu
                    setActiveMenu(null);
                  }
                }}
              >
                {item.label}
                {item.sections?.length > 0 && (
                  <ChevronDown open={activeMenu === item.label} />
                )}
              </Link>
            </div>
          ))}
        </div>

        <div className="tbg-nav-actions">
          <a href="/contact" className="tbg-contact-btn">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="tbg-hamburger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </div>

      {/* Mega Menu — rendered outside individual nav items for full-width */}
      <div
        className={`tbg-mega${activeMenu && activeItem?.sections?.length ? " open" : ""}`}
        onMouseEnter={() => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
        }}
        onMouseLeave={handleMouseLeave}
      >
        {activeItem && (
          <div
            className="tbg-mega-inner"
            style={{
              gridTemplateRows: "auto auto",
            }}
          >
            <div className="tbg-mega-intro">
              <p className="tbg-mega-intro-text">{activeItem.description}</p>
            </div>
            <div className="tbg-mega-cols">
              {activeItem.sections.map((section) => (
                <div key={section.title}>
                  <a href={section.href} className="tbg-mega-col-title">
                    {section.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1e3557] border-t border-white/10 max-h-[calc(100vh-60px)] overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="border-b border-white/10">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  className="flex-1 px-6 py-4 text-white/90 text-sm font-semibold tracking-widest uppercase hover:text-[#c8a96e] hover:bg-white/5 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.sections?.length > 0 && (
                  <button
                    className="px-4 py-4 text-white/90 hover:text-[#c8a96e] transition-colors"
                    onClick={() =>
                      setMobileExpanded((e) =>
                        e === item.label ? null : item.label,
                      )
                    }
                  >
                    <ChevronDown open={mobileExpanded === item.label} />
                  </button>
                )}
              </div>

              {item.sections?.length > 0 && mobileExpanded === item.label && (
                <div className="bg-black/20 pb-4">
                  {item.sections.map((section) => (
                    <div key={section.title}>
                      <div className="text-[#c8a96e] text-[11px] font-bold tracking-widest uppercase px-6 pt-3 pb-1.5">
                        {section.title}
                      </div>
                      <Link
                        href={section.href}
                        className="block text-white/75 text-sm px-8 py-1.5 hover:text-white transition-colors font-semibold"
                        onClick={() => setMobileOpen(false)}
                      >
                        {section.title} Overview
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex gap-3 p-6">
            <Link
              href="/contact"
              className="flex-1 text-center bg-[#c8a96e] text-[#1e3557] text-sm font-bold tracking-widest uppercase py-3 rounded-sm"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/client-portal"
              className="flex-1 text-center bg-white/10 text-white text-sm font-bold tracking-widest uppercase py-3 rounded-sm"
              onClick={() => setMobileOpen(false)}
            >
              Client Portal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
