import React, { useEffect, useState } from 'react';
import { products } from '../utils/product.js';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cartSlice.js';

const CartItem = (props) => {
  const { id, quantity } = props.data;

  const dispatch = useDispatch();

  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const findDetail = products.filter((product) => product.id === id)[0];
    if (findDetail) {
      setDetail(findDetail);
    }
  }, [id]);

  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: id,
        quantity: quantity - 1,
      })
    );
  };

  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: id,
        quantity: quantity + 1,
      })
    );
  };

  return (
    <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
      <img src={detail.image} alt='product-image' className='w-10 ml-0' />
      <h3 className='text-sm tracking-normal leading-normal'>{detail.name}</h3>
      <p>Rs.{detail.price * quantity}</p>
      <div className='flex w-20 justify-between gap-2'>
        <button
          className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600'
          onClick={handleMinusQuantity}>
          -
        </button>
        <span>{quantity}</span>
        <button
          className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600'
          onClick={handlePlusQuantity}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
