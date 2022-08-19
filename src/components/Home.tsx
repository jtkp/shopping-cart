import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Home = () => {
  // useState

  return (
    <Div>
      <h1>This is most certainly a site!</h1>
      <img src='./gamer.png' alt='Gamer drinking an energy drink'></img>
      <Link to='/shop'>
        <button>Enter Shop Here!</button>
      </Link>
    </Div>
  )
}

const Div = styled.div`
  position: relative;
  top: 5rem;
  min-width: 100%;
  min-height: 80vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;

  img {
    max-width: 60%;
  }

  @media (max-width: 700px) {
    img {
      max-width: 350px;
    }
  }

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