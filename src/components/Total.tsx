import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Total = ({ total }: any) => {
  // useState

  return (
    <Div>
      <Link to='/shop'>
        <button>Back To Catalog</button>
      </Link>
      <div>
        <h3>TOTAL</h3>
        <h2>${total} AUD</h2>
        <button style={{ marginTop: '1rem' }}>Checkout</button>
      </div>
    </Div>
  )
}

const Div = styled.div`
  width: 99%;
  padding: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  text-align: center;
  padding: 1rem;
  background-color: rgb(26, 26, 26);
  color: white;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 0.25rem;
  }

  button {
    padding: 1rem 2rem;
    border: 0;
    background-color: rgb(128, 0, 0);
    color: white;
    cursor: pointer;
    width: 250px;
    font-size: 1rem;
    font-weight: 700;
  }

  a button {
    background-color: rgb(60, 60, 60);
    font-weight: 400;
  }

  max-width: 900px;
  @media (max-width: 900px) {
    max-width: 100vw;
  }
  @media (max-width: 700px) {
    button {
      white-space: nowrap;
      width: 40vw;
      min-width: 100px;
    }
  }
`