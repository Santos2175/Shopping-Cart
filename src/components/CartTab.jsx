import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../stores/cartSlice';
import CartItem from './CartItem.jsx';

const CartTab = () => {
  const dispatch = useDispatch();
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);

  const handleStatusTab = () => {
    dispatch(toggleStatusTab());
  };
  return (
    <div
      className={`fixed top-0 right-0 bg-gray-700 w-96 h-full shadow-2xl grid grid-rows-[60px_1fr_60px_60px] transform transition-transform duration-500 ${
        statusTab === false ? 'translate-x-full' : ''
      }`}>
      <h2 className='p-5 text-white text-2xl text-center'>Shopping Cart</h2>
      <div className='p-5'>
        {carts.length !== 0 &&
          carts.map((item, index) => <CartItem key={index} data={item} />)}
      </div>
      <div>HEllo</div>
      <div className='grid grid-cols-2'>
        <button className='bg-black text-white' onClick={handleStatusTab}>
          CLOSE
        </button>
        <button className='bg-amber-500 text-white'>CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartTab;
