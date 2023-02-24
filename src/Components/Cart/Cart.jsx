import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../Hooks/useCart";
import "react-toastify/dist/ReactToastify.css";
import "lord-icon-element";
import useProducts from "../Hooks/getProducts";

const Cart = () => {
                  // load all products
  const [products, isLoading] = useProducts();

                  // after subtract
  const [product, setProduct] = useState([]);

                // invoice create
  const [showInvoice, setShowInvoice] = useState(false);

               // cart context api
  const { data, loading, error, post, deleteCart, update } =
    useContext(CartContext);

               //  subtract an array from another array
  useEffect(() => {
    const mergedProducts = data.map(({ productId, quantity, _id }) => {
      const product = products.find(({ _id }) => _id === productId);
      return { ...product, quantity, _id };
    });
    setProduct(mergedProducts);
  }, [data, products]);

            // handle button
    
  const handleDelete = async (id) => {
    await deleteCart(id);
  };

  const handleQuantity = async (id, value) => {
    const status = {
      status: value,
    };
    await update(id, status);
  };
  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div class="mx-auto max-w-5xl">
            <header class="text-center">
              <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Cart
              </h1>
            </header>
            {data &&
              product.map((item, index) => (
                <div key={index} class="mt-8">
                  <ul class="space-y-4">
                    <li class="flex items-center gap-4 border border-gray-600 p-6 rounded-xl hover:border-sky-300">
                      <img
                        src={item.image}
                        alt=""
                        class="h-16 w-16 rounded object-cover"
                      />

                      <div>
                        <h3 class="text-sm text-gray-900">{item.title}</h3>

                        <div>
                          <dt class="inline">Price:</dt>
                          <dd class="inline">{item.price}</dd>
                        </div>
                        <div>
                          <dt class="inline">Total:</dt>
                          <dd class="inline">{item.price * item.quantity}</dd>
                        </div>
                      </div>

                      <div class="flex flex-1 items-center justify-end gap-2">
                        {item.quantity > 1 ? (
                          <button
                            className="mt-2"
                            onClick={() => handleQuantity(item?._id, "minus")}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/qqedoixr.json"
                              colors="primary:#2516c7,secondary:#e83a30"
                              stroke="200"
                              trigger="hover"
                              style={{ width: "30px", height: "30px" }}
                            ></lord-icon>
                          </button>
                        ) : (
                          <button
                            className="mt-2"
                            onClick={() =>
                              toast.error("Quantity is too much low", {
                                position: "top-center",
                                autoClose: 1500,
                              })
                            }
                          >
                            {" "}
                            <lord-icon
                              src="https://cdn.lordicon.com/qqedoixr.json"
                              colors="primary:#ee66aa,secondary:#ee8f66"
                              stroke="200"
                              trigger="hover"
                              style={{ width: "30px", height: "30px" }}
                            ></lord-icon>
                          </button>
                        )}
                        <form>
                          <label for="Line3Qty" class="sr-only">
                            {" "}
                            Quantity{" "}
                          </label>

                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            id="Line3Qty"
                            class="h-8 w-8 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                          />
                        </form>
                        <button
                          className="mt-2"
                          onClick={() => handleQuantity(item?._id, "plus")}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/zgogqkqu.json"
                            colors="primary:#ee66aa,secondary:#7166ee"
                            stroke="200"
                            trigger="hover"
                            style={{ width: "30px", height: "30px" }}
                          ></lord-icon>
                        </button>
                        <button
                          class="text-gray-600 transition hover:text-red-600 mt-2"
                          onClick={() => handleDelete(item._id)}
                        >
                          <span class="sr-only">Remove item</span>

                          <lord-icon
                            src="https://cdn.lordicon.com/tntmaygd.json"
                            colors="primary:#911710,secondary:#911710"
                            stroke="150"
                            trigger="hover"
                            style={{ width: "30px", height: "30px" }}
                          ></lord-icon>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
            <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div class="w-screen max-w-lg space-y-4">
                <dl class="space-y-0.5 text-sm text-gray-700">
                  <div class="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>£250</dd>
                  </div>

                  <div class="flex justify-between">
                    <dt>VAT</dt>
                    <dd>£25</dd>
                  </div>

                  <div class="flex justify-between">
                    <dt>Discount</dt>
                    <dd>-£20</dd>
                  </div>

                  <div class="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>£200</dd>
                  </div>
                </dl>

                <div class="flex justify-end">
                  <span class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="-ml-1 mr-1.5 h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>

                    <p class="whitespace-nowrap text-xs">2 Discounts Applied</p>
                  </span>
                </div>

                <div class="flex justify-end">
                  <a
                    href="#"
                    class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Cart;
