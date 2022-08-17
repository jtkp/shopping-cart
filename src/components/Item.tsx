import React from 'react';
import { Game } from './util/Interfaces';
import styled from 'styled-components';

export const Item = ({ name, image, price }: Game) => {
  // useState

  return (
    <Div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h2>${price}</h2>
    </Div>
  )
}

const Div = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 1.5rem;
  }

  img {
    max-width: 300px;
    min-height: 250px;
    object-fit: cover;
  }

  @media (max-width: 700px) {
    h2 {
      font-size: calc(1rem + 1vw);
    }
  }
`