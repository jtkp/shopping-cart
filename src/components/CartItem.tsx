import React from 'react';
import { Game } from './util/Interfaces';
import styled from 'styled-components';

export const CartItem = ({ id, name, image, price, quantity }: Game) => {

  return (
    <Div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h2>${price}</h2>
      <h2>{quantity}</h2>
    </Div>
  )
}

const Div = styled.div`
  img {
    width: 200px;
  }
`