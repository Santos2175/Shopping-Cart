import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import iconCart from '../assets/images/iconCart.png';
import { addToCart } from '../stores/cartSlice.js';

const ProductCard = ({ id, name, price, image, description, slug }) => {
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ productId: id, quantity: 1 }));
  };

  return (
    <div className='bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <Link to={slug}>
        <img
          src={image}
          alt='product-image'
          className='w-full h-70 object-cover object-top transition-transform duration-300 ease-in-out transform hover:scale-110 drop-shadow-[0_80px_30px_#0007]'
        />
      </Link>

      <h3 className='text-xl leading-0 py-5 text-center font-medium text-slate-600'>
        {name}
      </h3>
      <div className='mt-4 flex justify-between items-center gap-4'>
        <p>
          Rs.
          <span className='text-2xl font-medium text-slate-500'>{price}</span>
        </p>
        <button
          className='max-sm:flex-1 bg-gray-300 p-2 text-md rounded-md hover:bg-gray-400 transition-colors duration-300 ease-in-out flex justify-center items-center gap-3'
          onClick={handleAddToCart}>
          <img src={iconCart} alt='' className='w-5 h-5 flex-start' />
          <span className='whitespace-nowrap text-gray-600 font-semibold'>
            Add to Cart
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
