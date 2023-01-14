import React from "react";
import "./Sales.css";
const Sales = () => {
  return (
    <div>
      <p id='explore' className=" text-4xl font-medium my-5 ml-10">Explore</p>
      <div className="cardBox group">
        <div className="card">
          <img
            style={{ width: "300px", height: "300px" }}
            className="rounded-2xl group-hover:scale-105 transition-transform ease-in-out duration-300 group-hover:blur-sm"
            src="https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg"
            alt=""
          />
          <div className="content">
            <div className=" mt-2">
              <p className="font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-400 ">
                Children Dress
              </p>
            </div>
            <div className="flex justify-around items-center ">
              <div className="font-medium mt-4 flex flex-col gap-y-1">
                <p className="bg-slate-50 rounded-lg px-0.5 text-teal-500 w-8">
                  Cloth
                </p>
                <p className="bg-purple-400 rounded-lg px-0.5 text-slate-50 w-8">
                  $200
                </p>
              </div>
              <div className="mt-4 flex flex-col gap-y-1">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3 hover:stroke-pink-600 hover:scale-105 hover:-translate-y-0.5 transition-all ease-in-out duration-200 delay-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3 hover:stroke-yellow-600 hover:scale-105 hover:-translate-y-0.5 transition-all ease-in-out duration-200 delay-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-1.5 ">
              <button className="bg-blue-700 px-2 rounded-xl hover:scale-105 hover:rounded hover:bg-red-600 transition-transform overflow-hidden ease-in-out duration-300 delay-100">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
