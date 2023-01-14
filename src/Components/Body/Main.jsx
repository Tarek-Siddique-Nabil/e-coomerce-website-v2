import React from "react";
import image from "../../assets/image/tony-sebastian-7sWm1yRJZhg-unsplash-removebg-preview.png";
import "../Body/main.css";
const Main = () => {
  return (
    <section id="main" className="relative">
        <div className="flex flex-col justify-center items-center ">
      <p className="heroText text-4xl py-9">A new Experience in Online Shopping</p>
      <button className="heroButton rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2">Explore Shop </button>
      </div>
      <div className=" relative w-auto h-auto flex  justify-around items-center ">
        <div className=" flex flex-col gap-y-2 ">
          <img
            className="xl:w-28 xl:h-28 md:w-24 md:h-24 w-16 h-16 rounded-2xl border-2 border-slate-50 hover:border-cyan-400 hover:scale-105 transition ease-in-out duration-300 overflow-hidden cursor-pointer"
            src="https://www.w3schools.com/css/paris.jpg"
          />
          <img
            className="xl:w-28 xl:h-28 md:w-24 md:h-24 w-16 h-16 rounded-2xl border-2 border-slate-50 hover:border-cyan-400 hover:scale-105 transition ease-in-out duration-300 overflow-hidden cursor-pointer"
            src="https://www.w3schools.com/css/paris.jpg"
          />
          <img
            className="xl:w-28 xl:h-28 md:w-24 md:h-24 w-16 h-16 rounded-2xl border-2 border-slate-50 hover:border-cyan-400 hover:scale-105 transition ease-in-out duration-300 overflow-hidden cursor-pointer"
            src="https://www.w3schools.com/css/paris.jpg"
          />
        </div>
        <div className="">
          <img
            className="w-auto h-[170px] lg:h-[500px] md:h-[350px] sm:h-[200px] xsm:h-[80px] transition ease-in-out duration-200 -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill hover:z-auto xl:mx-2"
            src={image}
          />
        </div>
        <div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-slate-50 font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
