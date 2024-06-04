import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../Common/Loading";
import Cart from "./Card";

import ProductRadio from "./ProductRadio";
import {useCategoryContext} from "../Context/CategoryContext";
import { useStore } from "zustand";
import ProductCategoryState from "../StateManagement/ProductCategoryState";


interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}


const fetchProducts = async (category: string): Promise<Product[]> => {
  const baseUrl = "https://fakestoreapi.com/products"
  const categoryUrl = `https://fakestoreapi.com/products/category/${category}`
  let response = await axios.get(baseUrl);
  if (category === "default")
    response = await axios.get(baseUrl);
  else {
    if (category && category !=="default") {
       response = await axios.get(categoryUrl)
    }
   
  }
  //  const category = ProductCategoryState(state => state.category);
  // const category = useStore(state => state.category);


  // const response = await axios.get("https://fakestoreapi.com/products");
  console.log(response.data);
  return response.data;
};

const AllProducts: React.FC = () => {
   const category = ProductCategoryState(state => state.category);
 
  
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products",category],
    queryFn: () => fetchProducts(category),
   
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <div>Error fetching products</div>;
  }
  return <AllProductsContent products={products} />;
};

const AllProductsContent: React.FC<{ products: Product[] }> = ({ products }) => {
  const { setCategories } = useCategoryContext();
  

  useEffect(() => {
    // Extract unique categories from products and set them in context
    const categories = Array.from(new Set(products.map(product => product.category)));
    setCategories(categories);
  }, [products, setCategories]);

  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="mt-24 w-1/2 mx-auto">
        <h1 className="font-semibold text-2xl mb-2">Available Category</h1>
        <ProductRadio />
      </div>
      {products.map((product) => (
        <Cart key={product.id} product={product} />
      ))}
    </div>
  );
};
//   return (
//     <>
//       <div className="grid grid-cols-4 gap-2">
//         <div className="mt-24">
//           <h1 className="font-semibold text-2xl mb-2">Available Category</h1>
//           <ProductRadio></ProductRadio></div>
//         {products?.map((product) => (
          
//           <Cart key={product.id} product={product}></Cart>
//         ))}
//       </div>
//     </>
//   );
  // };
  

export default AllProducts;
