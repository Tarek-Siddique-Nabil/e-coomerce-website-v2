import React from "react";
import "lord-icon-element";
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
          <lord-icon
                      src="https://cdn.lordicon.com/lpddubrl.json"
                      trigger="hover"
                      style={{ width: "35px", height: "35px" }}
                    ></lord-icon>
          </button>
        </div>
      </section></div>
    </div>
  );
};

export default Popular;
