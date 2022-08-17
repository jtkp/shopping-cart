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
  img {
    max-width: 300px;
    min-height: 300px;
    object-fit: cover;
  }
`