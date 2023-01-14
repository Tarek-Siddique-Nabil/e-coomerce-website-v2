const getProducts = async ()=>{
    const res = await fetch ('https://shopping-backend-yfi1.onrender.com/product');
    const data = await res.json();
    return data;
    
}
   
export default getProducts;