import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';

import React from 'react';

const Header = () => {
  return (
    <header className='flex justify-between items-center mb-5'>
      <Link to='/' className='text-xl font-semibold'>
        Shopping Cart
      </Link>
      <div className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative'>
        <img src={iconCart} alt='' className='w-6' />
        <span className='absolute top-2/3 right-1/2 bg-red-500 text-white tex-sm w-5 h-5 flex justify-center items-center rounded-full'>
          0
        </span>
      </div>
    </header>
  );
};

export default Header;
