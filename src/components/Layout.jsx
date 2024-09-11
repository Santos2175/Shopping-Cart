import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import CartTab from './CartTab';
import { useSelector } from 'react-redux';

const Layout = () => {
  const statusTab = useSelector((store) => store.cart.statusTab);
  return (
    <div className='bg-zinc-200'>
      <main
        className={`w-[1200px] max-w-full mx-auto mt-0 px-5 pt-2 pb-5 transform transition-transform duration-500 overflow-auto
 ${
   statusTab === false
     ? ''
     : '-translate-x-20 filter blur-sm pointer-events-none'
 }`}>
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </div>
  );
};

export default Layout;
