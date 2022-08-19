import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Empty = () => {
  // useState

  return (
    <Div>
      <h1>Your cart is empty.</h1>
      <Link to='/shop'>
        <button>Add some games!</button>
      </Link>
    </Div>
  )
}

const Div = styled.div`
  min-width: 100%;
  min-height: 80vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;

  button {
    padding: 1rem 2rem;
    border: 0;
    background-color: rgb(60, 60, 60);
    color: white;
    cursor: pointer;
    width: 250px;
    font-size: 1rem;
  }
`