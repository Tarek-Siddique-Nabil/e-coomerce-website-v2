import React from "react";

const Popular = () => {
  return (
    <div >
        <p className="text-4xl font-bold my-5 ml-10">Popular Sales</p>
        <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 justify-items-center">
      <section className="group w-72 h-44 flex gap-x-3 items-center border-2 rounded-2xl hover:rounded-xl border-gray-800 px-2 cursor-pointer">
        <div>
          <img
            className="w-44 h-40 rounded-2xl group-hover:scale-105 transition duration-300  overflow-hidden "
            src="https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg"
          />
        </div>
        <div className="">
          <p className="font-bold">Iphone 14 PRO MAX </p>
          <p className="font-medium">Mobile</p>
          <p className="font-bold shadow-2xl ">$1600</p>
          <button className="btn border-2 mt-1 border-gray-600 group-hover:border-pink-500 rounded-xl px-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button>
        </div>
      </section></div>
    </div>
  );
};

export default Popular;
