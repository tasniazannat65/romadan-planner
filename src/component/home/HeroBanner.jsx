import React from "react";
import { NavLink } from "react-router";

const HeroBanner = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center text-center px-6
             bg-cover bg-center sm:bg-top md:bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/68/f0/89/68f0899f28c7c624005fc4cd4ac51cb8.jpg')"
       
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl space-y-6">

        <h1 className="playfair-display text-4xl md:text-6xl font-bold text-white leading-tight">
          Make This Ramadan <br />
          <span className="text-accent glow-accent px-3 rounded-lg">
            Meaningful
          </span>
        </h1>

        <p className="poppins text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
          Track your prayers, set daily goals, and improve yourself spiritually.
          Build discipline and consistency throughout this blessed month.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">

          <NavLink to="/planner">
            <button className="btn btn-primary hover:btn-secondary px-8 text-base rounded-full">
              Start Planning
            </button>
          </NavLink>

          <NavLink to="/progress">
            <button className="btn btn-outline btn-accent px-8 rounded-full text-base transition">
              View Progress
            </button>
          </NavLink>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;