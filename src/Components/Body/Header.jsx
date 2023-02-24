import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import "lord-icon-element";
import { CartContext } from "../Hooks/useCart";

const Header = () => {
  const { data, loading, error, post } = useContext(CartContext);
  return (
    <div className="sticky top-0  z-40">
      <nav className=" bg-white dark:bg-gray-800">
        <div className="container m-auto px-6 md:px-2 lg:px-2 ">
          <div className="flex  justify-between py-6 gap-6 md:py-4 md:gap-0 ">
            <input
              type="checkbox"
              name="toggle_nav"
              id="toggle_nav"
              className="peer hidden"
            />
            <div className="w-full flex justify-between md:w-max md:px-0">
              <img
                src="https://hellomama.bijoyit.net/static/media/hello_mama.d20c6edf6f8dc695c10e.jpeg"
                className="w-14 rounded-full shadow-lg  dark:contrast-100 contrast-200"
                alt="tailus logo"
              />
               
               <label class="relative block md:hidden">
             
             <input
               class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pr-9 pl-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
               placeholder="Search for anything..."
               type="text"
               name="search"
             />
                <span class="sr-only">Search</span>
             <span class="absolute inset-y-0 right-0 flex items-center pr-2 hover:cursor-pointer -mt-4">
               <lord-icon
                 src="https://cdn.lordicon.com/zniqnylq.json"
                 colors="primary:#4030e8,secondary:#66d7ee"
                 stroke="130"
                 trigger="loop-on-hover"
                 style={{ width: "30px", height: "30px" }}
               ></lord-icon>
             </span>
           </label>

              <div className="flex items-center md:hidden max-h-10">
                <label
                  role="button"
                  for="toggle_nav"
                  aria-label="humburger"
                  id="hamburger"
                  className="relative z-40 px-2 py-3 sm:-mr-6"
                >
                  <div
                    id="line"
                    className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                  ></div>
                  <div
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                  ></div>
                </label>
              </div>
            </div>

            <label
              role="button"
              for="toggle_nav"
              className="fixed w-full z-30 h-full m-auto bg-gray-700 bg-opacity-40 hidden peer-checked:block md:peer-checked:hidden"
            ></label>

            <div
              className="flex z-50 flex-col md:flex-row justify-between 
                    items-center gap-y-4 p-6 bg-white dark:bg-gray-800 md:w-9/12
                    md:gap-y-4 md:p-0 
                    md:bg-transparent lg:w-7/12 fixed top-0 -left-full transition-all duration-500 peer-checked:left-0 max-w-sm h-full 
                    md:left-0 md:h-auto w-4/5 md:max-w-none md:relative lg:first-letter:top-0 xl:hidden md:hidden"
            >
              <div className="flex md:hidden w-full pb-5">
                <img
                  src="https://hellomama.bijoyit.net/static/media/hello_mama.d20c6edf6f8dc695c10e.jpeg"
                  className="w-20 rounded-full contrast-200"
                  alt="tailus logo"
                  width="144"
                  height="68"
                />
              </div>
              <div className="block w-full h-full md:h-auto ">
                <ul className="space-y-8 tracking-wide font-medium md:flex md:space-y-0 xl:gap-x-2 ">
                  <li>
                    <div
                      className="relative text-gray-600
                                                    before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                    >
                      <button className="btn -mt-3 bg-transparent border-0 text-black dark:text-slate-50 hover:text-yellow-300">
                        Home
                      </button>
                    </div>
                  </li>
                  <li>
                    <div
                      className="relative text-gray-600
                                                    before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                    >
                      <button className="btn -mt-3 bg-transparent border-0 text-black dark:text-slate-50 hover:text-yellow-300">
                        Home
                      </button>
                    </div>
                  </li>
                  <li>
                    <div
                      className="relative text-gray-600
                                                    before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                    >
                      <button className="btn -mt-3 bg-transparent border-0 text-black dark:text-slate-50 hover:text-yellow-300">
                        Home
                      </button>
                    </div>
                  </li>

                  <li className="md:pl-2">
                    <label className="swap swap-rotate">
                      {/* <!-- this hidden checkbox controls the state --> */}
                      <input type="checkbox" className="sr-only" />

                      {/* <!-- sun icon --> */}
                      <div className="swap-on flex gap-2">
                        <svg
                          className=" fill-current w-6 h-6 dark:text-slate-50"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>
                        <p className="text-white xl:hidden md:hidden">Light</p>
                      </div>

                      {/* <!-- moon icon --> */}
                      <div className="swap-off flex gap-2">
                        <svg
                          className=" fill-current w-6 h-6 dark:text-slate-50"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                        <p className="text-white xl:hidden md:hidden">Dark</p>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div className="xl:flex md:flex gap-5  hidden font-semibold xl:ml-36">
              <NavLink to="/">
                {" "}
                <button
                  id="linkBtn"
                  className=" btn-md transition ease-in-out delay-150  text-black    hover:scale-110  px-5 rounded-xl"
                >
                  Home
                </button>
              </NavLink>
              <NavLink to="/shop">
                {" "}
                <button
                  id="linkBtn2"
                  className="btn-md transition ease-in-out delay-150  text-black    hover:scale-110  px-5 rounded-xl"
                >
                  Shop
                </button>
              </NavLink>
            </div>

            <div className="xl:flex md:flex hidden items-center gap-3">
              <label class="relative block">
             
                <input
                  class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pr-9 pl-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Search for anything..."
                  type="text"
                  name="search"
                />
                   <span class="sr-only">Search</span>
                <span class="absolute inset-y-0 right-0 flex items-center pr-2 hover:cursor-pointer ">
                  <lord-icon
                    src="https://cdn.lordicon.com/zniqnylq.json"
                    colors="primary:#4030e8,secondary:#66d7ee"
                    stroke="130"
                    trigger="loop-on-hover"
                    style={{ width: "30px", height: "30px" }}
                  ></lord-icon>
                </span>
              </label>
              <div className="indicator group">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <lord-icon
                      src="https://cdn.lordicon.com/ytuosppc.json"
                      trigger="hover"
                      stroke="120"
                      style={{ width: "35px", height: "35px" }}
                    ></lord-icon>

                    <span className="badge badge-sm indicator-item">5</span>
                  </div>
                </label>
              </div>
              <div className="dropdown dropdown-end group">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <NavLink to="/cart" className="indicator">
                    <lord-icon
                      src="https://cdn.lordicon.com/lpddubrl.json"
                      stroke="150"
                      trigger="hover"
                      style={{ width: "35px", height: "35px" }}
                    ></lord-icon>

                    <span className="badge badge-sm indicator-item">
                      {data.length || 0}
                    </span>
                  </NavLink>
                </label>
              </div>

              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
