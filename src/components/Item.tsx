import React from 'react';
import { Game } from './util/Interfaces';

export const Item = ({ name, image, price }: Game) => {
  // useState

  return (
    <div>
      <h1>Item</h1>
      <h2>title: {name}</h2>
      <h2>image: {image}</h2>
      <h2>price: {price}</h2>
    </div>
  )
}