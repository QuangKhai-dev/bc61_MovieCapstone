import React from 'react';
import Header from '../../layout/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../layout/Footer/Footer';

const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
