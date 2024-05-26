import { useState } from "react";
import logo from "../assets/LOGO-nowords.png";
import { useNavigate } from "react-router-dom";

import './Animation.css';

const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  // const signout = () => {
  //   localStorage.removeItem('userid');
  //   setShowProfileMenu(false);
  //   navigate('/login');
  //   return () => {}

  // }

  return (
    <nav className="bg-black">
      <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center pt-4 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-yellow-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <a href="/">
                <img className="h-12 w-auto card animate-pulse" src={logo} alt="CampusNest logo" />
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 my-4">
                <a
                  href="/browse"
                  className="text-white-800 hover:bg-yellow-400 hover:text-black rounded-md px-3 py-2 text-lg font-medium"
                  aria-current="page"
                >
                  Browse
                </a>
                <a
                  href="/offer"
                  className="text-white-800 hover:bg-yellow-400 hover:text-black rounded-md px-3 py-2 text-lg font-medium"
                >
                  Offer
                </a>
                {/* Roommate Finder Link */}
                <a
                  href="/rm"
                  className="text-white-800 hover:bg-yellow-400 hover:text-black rounded-md px-3 py-2 text-lg font-medium"
                >
                  Roommate Finder
                </a>
              </div>
            </div>
          </div>
          {/* Removed the user menu */}
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div class="relative ml-3">
              <div>
                <button
                  type="button"
                  class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                >
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
                    alt=""
                  />
                </button>
              </div>
              {showProfileMenu && (
                <div
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <a
                    href="/profile"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-0"
                  >
                    Profile
                  </a>
                  {/* <a
                    onClick={signout}
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a> */}
                  
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="/"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-lg font-medium"
            aria-current="page"
          >
            Home
          </a>
          <a
            href="/browse"
            className="bg-gray-900 text-white rounded-md px-3 py-2 text-lg font-medium"
            aria-current="page"
          >
            Browse
          </a>
          <a
            href="/offer"
            className="text-gray-300 hover:bg-gold-400 hover:text-black rounded-md px-3 py-2 text-lg font-medium"
          >
            Offer
          </a>
          {/* Roommate Finder Link */}
          <a
            href="/rm"
            className="text-white-800 hover:bg-yellow-400 hover:text-black rounded-md px-3 py-2 text-lg font-medium"
            >
            Roommate Finder
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
