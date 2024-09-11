import React from 'react';
import { products } from '../utils/product';
import ProductCard from '../components/ProductCard.jsx';

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl font-semibold text-center text-gray-600 my-5'>
        Featured Products
      </h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
