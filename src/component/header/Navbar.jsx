import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router";
import { BsMoon, BsSun } from "react-icons/bs";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/planner", label: "Planner" },
    { to: "/progress", label: "Progress" },
  ];

  return (
    <>
     

      <div   className={`fixed top-0 left-0 w-full z-50 px-6 transition-all duration-300 ${scrolled ? "bg-base-100 shadow-md" : "bg-transparent"} `}
 ref={menuRef}>
        <div className="nb-pill max-w-7xl mx-auto">

          {/* Logo */}
          <NavLink to="/" className="nb-logo">
            <span className="nb-moon">🌙</span>
            Romadan Planner
          </NavLink>

          {/* Desktop Links */}
          <ul className="nb-links nb-desktop-links">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="nb-right">
            <button
              className="nb-toggle"
              onClick={() => setTheme(t => t === "light" ? "dark" : "light")}
              aria-label="Toggle theme"
            >
              {theme === "light"
                ? <BsMoon style={{ fontSize: "1rem", color: "var(--color-neutral)" }} />
                : <BsSun style={{ fontSize: "1rem", color: "var(--color-warning)" }} />
              }
            </button>

            <div
              className={`nb-ham${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen(o => !o)}
              role="button"
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`nb-mobile${menuOpen ? " open" : ""}`}>
          {links.map(({ to, label }, i) => (
            <React.Fragment key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) => isActive ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
              {i < links.length - 1 && <div className="nb-divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;