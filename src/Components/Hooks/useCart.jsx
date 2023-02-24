import { createContext } from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `${import.meta.env.VITE_APP_SERVER_LINK}/cart`;
    const get = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    get();
  }, []);

  const post = async (body) => {
    setLoading(true);
    setError(null);
    try {
      const url = `${import.meta.env.VITE_APP_SERVER_LINK}/cart`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const json = await response.json();
      if (json) {
        toast.success("product added in cart", {
          position: "top-center",
          autoClose: 1000,
        });
      }
      setData(json);
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 1500,
      });
      setError(error);
    }
    setLoading(false);
  };
  
  const update = async (id, body) => {
    setLoading(true);
    setError(null);
    try {
      const url = `${import.meta.env.VITE_APP_SERVER_LINK}/cart/${id}`;
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const json = await response.json();
      if (json) {
        toast.success(`${body.status === "plus" ? "Product Quantity Increase": "Product Quantity Decrease"}`, {
          position: "top-center",
          autoClose: 1000,
        });
        // Update the cart data by finding the index of the updated product and replacing only that element with the updated data
        const index = data.findIndex((item) => item._id === id);
        const newData = [...data];
        newData[index] = json;
        setData(newData);
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 1500,
      });
      setError(error);
    }
    setLoading(false);
  };
  
  
  const deleteCart = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_SERVER_LINK}/cart/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();

      if (data) {
        toast.success("product delete", {
          position: "top-center",
          autoClose: 1000,
        });
        // Remove the deleted item from the existing data
        setData(data => data.filter(item => item._id !== id));
      } else {
        toast.error("Something error ", {
          position: "top-center",
          autoClose: 1000,
        });
      }
    } catch (error) {
      toast.error("Something error ", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  return (
    <CartContext.Provider value={{ data, loading, error, post, deleteCart,update }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
