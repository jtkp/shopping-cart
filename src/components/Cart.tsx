import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CartItem } from './CartItem';
import { ContextType, Game } from './util/Interfaces';
import styled from 'styled-components';
import { Empty } from './Empty';
import { Total } from './Total';

export const Cart = () => {
  const [games, setGames, empty, setEmpty, total, setTotal] = useOutletContext() as ContextType;

  let cartList = games.map(game => {
    if (game.quantity !== 0) {
      return (
        <CartItem key={game.id} id={game.id} name={game.name} image={game.image} price={game.price} quantity={game.quantity}></CartItem>
      )
    }
  });

  return (
    <Div>
      {empty ? <Empty /> : cartList}
      <Total total={total}></Total>
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  
  @media (max-width: 1280px) {
    max-width: 100vw;
  }
`