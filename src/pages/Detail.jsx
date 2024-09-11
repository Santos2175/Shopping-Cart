import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { products } from '../utils/product.js';
import { addToCart } from '../stores/cartSlice.js';

const Detail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ productId: detail.id, quantity: quantity }));
  };

  useEffect(() => {
    const findDetail = products.filter((product) => product.slug === slug);
    if (findDetail.length > 0) {
      console.log(findDetail[0]);
      setDetail(findDetail[0]);
    } else {
      window.location.href = '/';
    }
  }, [slug]);
  return (
    <div className='px-4'>
      <h2 className='text-3xl font-semibold text-center text-gray-600 my-5'>
        Product Details
      </h2>
      <div className='grid grid-cols-2 gap-5 mt-6 max-sm:grid-cols-1'>
        <div>
          <img
            src={detail.image}
            alt='product-image'
            className='w-full object-cover object-top'
          />
        </div>
        <div className='flex flex-col gap-5 mt-8 max-sm:mt-3'>
          <h1 className='text-4xl max-sm:text-3xl uppercase font-bold text-slate-600 leading-normal tracking-normal'>
            {detail.name}
          </h1>
          <p className='font-semibold text-2xl text-slate-600'>
            Rs. <span className='text-4xl text-slate-700'>{detail.price}</span>
          </p>
          <div className='flex gap-5'>
            <div className='flex gap-2 justify-center items-center'>
              <button
                className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'
                onClick={handleMinusQuantity}>
                -
              </button>
              <span className='bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>
                {quantity}
              </span>
              <button
                className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'
                onClick={handlePlusQuantity}>
                +
              </button>
            </div>
            <button
              className='bg-slate-700 hover:bg-slate-800 text-slate-300 px-7 py-3 rounded-xl shadow-2xl'
              onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
          <p className='text-xl text-slate-600 leading-normal tracking-normal'>
            {detail.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
