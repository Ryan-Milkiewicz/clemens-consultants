"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { NAV_ITEMS } from "./NavLinks";
import { SearchIcon, ChevronDown, HamburgerIcon } from "./NavbarIcons";
import "./Navbar.css";
//import Logo from "../../assets/logo.svg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const UTILITY_LINKS = [
    { label: "Events", href: "/events" },
    { label: "Subscribe", href: "/subscribe" },
    { label: "Client Portal", href: "/client-portal" },
    { label: "Submit RFP", href: "/submit-rfp" },
    { label: "(877) 917-3077", href: "tel:8779173077" },
  ];

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
          <a key={l.label} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>

      {/* Main Bar */}
      <div
        className="tbg-main"
        style={{ boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none" }}
      >
        <a href="/" className="tbg-logo" aria-label="Clemens Consultants Home">
          <Image
            src="/clemens-consultants-logo.png"
            alt="Clemens Consultants Logo"
            width={200}
            height={45}
            priority
          />
        </a>

        {/* Desktop Nav */}
        <div className="tbg-nav-links">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="tbg-nav-item"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.href}
                className={`tbg-nav-trigger${activeMenu === item.label ? " active" : ""}`}
                aria-expanded={activeMenu === item.label}
                onClick={(e) => item.sections?.length && e.preventDefault()}
              >
                {item.label}
                {item.sections?.length > 0 && (
                  <ChevronDown open={activeMenu === item.label} />
                )}
              </a>
            </div>
          ))}
        </div>

        <div className="tbg-nav-actions">
          <button className="tbg-search-btn" aria-label="Search">
            <SearchIcon />
          </button>
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
              <a href={activeItem.href} className="tbg-mega-intro-link">
                View All {activeItem.label} →
              </a>
            </div>
            <div className="tbg-mega-cols">
              {activeItem.sections.map((section) => (
                <div key={section.title}>
                  <a href={section.href} className="tbg-mega-col-title">
                    {section.title}
                  </a>
                  {section.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="tbg-mega-col-link"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div className={`tbg-mobile-menu${mobileOpen ? " open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <div key={item.label} className="tbg-mobile-item">
            <button
              className="tbg-mobile-trigger"
              onClick={() =>
                setMobileExpanded((e) => (e === item.label ? null : item.label))
              }
              aria-expanded={mobileExpanded === item.label}
            >
              {item.label}
              {item.sections?.length > 0 && (
                <ChevronDown open={mobileExpanded === item.label} />
              )}
            </button>
            {item.sections?.length > 0 && (
              <div
                className={`tbg-mobile-submenu${mobileExpanded === item.label ? " open" : ""}`}
              >
                {item.sections.map((section) => (
                  <div key={section.title}>
                    <div className="tbg-mobile-section-title">
                      {section.title}
                    </div>
                    <a
                      href={section.href}
                      className="tbg-mobile-sublink"
                      style={{
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.9)",
                      }}
                    >
                      {section.title} Overview
                    </a>
                    {section.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="tbg-mobile-sublink"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="tbg-mobile-contact">
          <a href="/contact" className="primary">
            Contact Us
          </a>
          <a href="/client-portal" className="secondary">
            Client Portal
          </a>
        </div>
      </div>
    </nav>
  );
}
