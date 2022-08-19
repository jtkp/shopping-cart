import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Home = () => {
  // useState

  return (
    <Div>
      <h1>This is most certainly a site!</h1>
      <h3>A mobile-friendly website, designed with <em>JavaScript/TypeScript</em> and the <em>React</em> framework. Fetches from the <a href="https://rawg.io/apidocs" style={{ color: 'rgb(128, 0, 0)' }}>RAWG Video Games Database API</a>, resulting in a purely frontend experience.</h3>
      <img src='./gamer.png' alt='Gamer drinking an energy drink'></img>
      <Link to='/shop'>
        <button>Enter shop here!</button>
      </Link>
    </Div>
  )
}

const Div = styled.div`
  margin-top: 5rem;
  min-width: 100%;
  min-height: 80vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;

  h3 {
    max-width: 900px; 
  }

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
  
  button:hover {
    background-color: rgb(120, 120, 120);
  }
`