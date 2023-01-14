import React from "react";
import { useQuery } from "react-query";
import getProducts from "../Hooks/getProducts";
import "./Loading.css";
import "./Shop.css";
const Shop = () => {
  const { data, isLoading } = useQuery("product", () => getProducts());

  return (
    <div className=" relative">
      {isLoading !== true ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-5 ">
          {data?.map((item, index) => (
       
          <div id="card" className="flex flex-col justify-center items-center group ">
            <div>
              <img className=" rounded-xl group-hover:scale-75 group-hover:-translate-y-16 transition-transform duration-300 delay-75 ease-in-out" style={{width:"280px",height:'220px'}} src={item.image} />
            </div>
            <div className="text-center font-bold  group-hover:z-20 group-hover:absolute group-hover:mt-20 transition-transform duration-300 delay-75 ease-in-out">
                <h2 className="text-2xl">{item.title}</h2>
                <p className="text-md"><strong>Price: </strong>{item.price}</p>
              </div>
              <div className="flex justify-center gap-4 group-hover:z-10 group-hover:absolute group-hover:mt-44  transition-transform duration-300 delay-75 ease-in-out">
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:stroke-pink-400">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

                </button>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:stroke-sky-300">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

                </button>
              </div>
              <div className="flex group-hover:absolute group-hover:mt-64">
              <button className="border border-black px-3 py-0.5  rounded-xl group-hover:bg-sky-300 bg-teal-300">Buy</button>
</div>
         </div>
          ))}
        </div>
      ) : (
        <div className="h-96 grid place-content-center  mt-auto">
          <span className="loader " />
        </div>
      )}
    </div>
  );
};

export default Shop;
