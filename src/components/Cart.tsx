import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { CartItem } from './CartItem';
import { Game } from './util/Interfaces';

type ContextType = [
  Game[],
  React.Dispatch<React.SetStateAction<Game[]>>
];

export const Cart = () => {
  const [games, setGames] = useOutletContext() as ContextType;

  let cartList = games.map(game => {
    if (game.quantity !== 0) {
      return (
        <CartItem key={game.id} id={game.id} name={game.name} image={game.image} price={game.price} quantity={game.quantity}></CartItem>
      )
    }
  });

  return (
    <div>
      {cartList}
    </div>
  )
}