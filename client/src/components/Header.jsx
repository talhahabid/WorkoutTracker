import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Header = () => {
  const { user } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`bg-slate-200 p-6 ${!user ? "py-12" : ""}`}>
      <div className="flex justify-between items-center relative">
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="bg-inherit hover:opacity-85 active:opacity-80 text-xl"
          >
            <span className="font-bold text-3xl text-gray-600">Workout</span>
            <span className="font-bold text-3xl text-blue-600 ml-1">
              Tracker
            </span>
          </button>

          {user && isMenuOpen && (
            <div className="absolute top-full mt-[-30px] w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <ul className="py-1">
                <li>
                  <Link
                    to="/"
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    onClick={handleMenuClick} 
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ppl"
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    onClick={handleMenuClick} 
                  >
                    Push, Pull, Legs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/upper-lower"
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    onClick={handleMenuClick} 
                  >
                    Upper Lower
                  </Link>
                </li>
                <li>
                  <Link
                    to="/full-body"
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    onClick={handleMenuClick} 
                  >
                    Full Body
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bro-split"
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    onClick={handleMenuClick} 
                  >
                    Bro Split
                  </Link>
                </li>
                <li>
                  <Link
                    to="/custom"
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    onClick={handleMenuClick} 
                  >
                    Custom
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <ul className="flex items-center space-x-4">
          {user ? (
            <li className="flex items-center space-x-2">
              <Link
                to="/profile"
                className="flex flex-col items-center space-y-2"
              >
                <img
                  className="w-10 h-10 rounded-full lg:w-12 lg:h-12"
                  src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
                  alt="Profile"
                />
                <p className="text-gray-700 text-xl font-semibold">
                  {user.user.username}
                </p>
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="/signin"
                className="text-blue-600 text-xl hover:underline"
              >
                Sign In
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
