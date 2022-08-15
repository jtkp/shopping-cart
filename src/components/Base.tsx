import React from 'react';
import { Header } from './util/Header';
import { Footer } from './util/Footer';
import { Outlet } from 'react-router-dom';

export const Base = () => {
  // useState

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}