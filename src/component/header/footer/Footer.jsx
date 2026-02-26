import React from "react";
import { NavLink } from "react-router";
import { FaMosque } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 mt-16 border-t border-primary/20">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Reflection Section */}
        <div className="text-center mb-10">
          <h2 className="playfair-display text-2xl md:text-3xl text-primary mb-4">
            🌙 Reflect. Improve. Grow.
          </h2>
          <p className="poppins text-neutral max-w-2xl mx-auto">
            Ramadan is not just about fasting — it's about discipline,
            gratitude and strengthening your connection with Allah.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo + Tagline */}
          <div className="text-center md:text-left">
            <h3 className="playfair-display text-xl text-primary flex items-center justify-center md:justify-start gap-2">
              <FaMosque className="text-accent" />
              Romadan Planner
            </h3>
            <p className="poppins text-sm text-neutral mt-2">
              Your companion for a more mindful Ramadan.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <ul className="flex gap-6 poppins text-sm">
              <li>
                <NavLink to="/" className="hover:text-primary transition">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/planner" className="hover:text-primary transition">
                  Planner
                </NavLink>
              </li>
              <li>
                <NavLink to="/progress" className="hover:text-primary transition">
                  Progress
                </NavLink>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="divider my-8"></div>

        {/* Bottom Dua Section */}
        <div className="text-center poppins text-sm text-neutral">
          <p className="mb-2">
            “Allahumma innaka ‘afuwwun tuhibbul ‘afwa fa’fu ‘anni.”
          </p>
          <p className="text-xs text-base-content/70">
            © {new Date().getFullYear()} Romadan Planner — Built with sincerity 🌙
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;