import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import iconCart from '../assets/images/iconCart.png';
import { toggleStatusTab } from '../stores/cartSlice';
import { useDispatch } from 'react-redux';

import React from 'react';

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const handleStatusTab = () => {
    dispatch(toggleStatusTab());
  };
  return (
    <header className='flex justify-between items-center mb-5'>
      <Link to='/' className='text-xl font-semibold'>
        Shopping Cart
      </Link>
      <div
        className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative cursor-pointer'
        onClick={handleStatusTab}>
        <img src={iconCart} alt='' className='w-6' />
        <span className='absolute top-2/3 right-1/2 bg-red-500 text-white tex-sm w-5 h-5 flex justify-center items-center rounded-full'>
          {totalQuantity}
        </span>
      </div>
    </header>
  );
};

export default Header;
