import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CartItem } from './CartItem';
import { ContextType, Game } from './util/Interfaces';
import styled from 'styled-components';
import { Empty } from './Empty';
import { Total } from './Total';

export const Cart = () => {
  const [games, setGames, empty, setEmpty, total, setTotal, quantity, setQuantity] = useOutletContext() as ContextType;

  const handleRemove = (event: any) => {
    let id = event.currentTarget.dataset.id as number;
    console.log(`attempting remove on ${id}`);

    let newGames = games;
    newGames.forEach(game => {
      if (game.id == id) {
        console.log('decrement quantity');
        game.quantity--;
        if (total - game.price === 0) {
          setEmpty(true);
        }
        setTotal(total - game.price);
        setQuantity(quantity - 1);
        return;
      }
    });

    setGames(newGames);
  }

  const handleAdd = (event: any) => {
    let id = event.currentTarget.dataset.id as number;
    console.log(`attempting add on ${id}`);

    let newGames = games;
    newGames.forEach(game => {
      if (game.id == id) {
        console.log('increment quantity');
        game.quantity++;
        setTotal(total + game.price);
        setQuantity(quantity + 1);
        return;
      }
    });

    setGames(newGames);
  }

  let cartList = games.map(game => {
    if (game.quantity !== 0) {
      return (
        <CartItem
          key={game.id}
          id={game.id}
          name={game.name}
          image={game.image}
          price={game.price}
          quantity={game.quantity}
          handleAdd={handleAdd}
          handleRemove={handleRemove}></CartItem>
      )
    }
  });

  return (
    <Div>
      <h1>Cart</h1>
      {empty ? <Empty /> : [cartList, <Total total={total}></Total>]}
    </Div>
  )
}

const Div = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  
  @media (max-width: 1280px) {
    max-width: 100vw;
  }
`