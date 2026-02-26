import React, { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';


const Navbar = () => {
        const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
    return (
        <div>
                <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="bgn btn-ghost btn-circle"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <BsMoon className="text-xl text-neutral" />
              ) : (
                <BsSun className="text-xl text-warning" />
              )}
            </button>
            <h2 className='font-bold text-3xl text-primary '>Romadan</h2>
            
        </div>
    );
};

export default Navbar;