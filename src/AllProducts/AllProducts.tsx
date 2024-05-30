import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Common/Loading';

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


const fetchProducts = async (): Promise<Product[]> => {
   const response = await axios.get('https://fakestoreapi.com/products');
   console.log(response.data);
  return response.data;
};

const AllProducts: React.FC = () => {
  const { data: products, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
  if (isLoading) {
    return <Loading></Loading>
  }

  if (error) {
    return <div>Error fetching products</div>;
  }
   return (
      <div>
         <h1>Successfully get the All Producs</h1>
         
      </div>
   );
};

export default AllProducts;