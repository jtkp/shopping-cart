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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 1280px;

  @media (max-width: 1280px) {
    min-width: 100vw;
  }
`