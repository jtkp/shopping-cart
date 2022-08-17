import React from 'react';
import { Item } from './Item';
import { ItemProps } from './util/Interfaces';

export const Items = ({ games }: ItemProps) => {
  let gamesList = games.map(({ name, image, price }, index) => {
    return (
      <Item key={index} name={name} image={image} price={price}></Item>
    )
  });

  return (
    <div>
      <h1>Items</h1>
      {gamesList}
    </div>
  )
}