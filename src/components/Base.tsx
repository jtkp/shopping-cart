import React from 'react';
import { Header } from './util/Header';
import { Footer } from './util/Footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Base = () => {
  // useState

  return (
    <Div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </Div>
  )
}

const Div = styled.div`
  max-width: 1280px;
`