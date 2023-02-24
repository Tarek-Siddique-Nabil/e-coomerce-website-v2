import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const url = `${import.meta.env.VITE_APP_SERVER_LINK}/product`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    if (products.length === 0) {
      fetchData();
    }
  }, []); // remove 'products' from the dependency array

  return [products, isLoading];
};

export default useProducts;
