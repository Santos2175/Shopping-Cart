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
    <div>
      <h2 className='text-3xl text-center'>Product Details</h2>
      <div className='grid grid-cols-2 gap-5 mt-5'>
        <div>
          <img src={detail.image} alt='product-image' className='w-full' />
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-4xl uppercase font-bold'>{detail.name}</h1>
          <p className='font-bold text-3xl'>Rs.{detail.price}</p>
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
              className='bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl'
              onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
          <p>{detail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
