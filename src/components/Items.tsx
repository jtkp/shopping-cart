import React from 'react';
import { Item } from './Item';
import { ItemProps } from './util/Interfaces';
import styled from 'styled-components';

export const Items = ({ games }: ItemProps) => {
  let gamesList = games.map(({ name, image, price }, index) => {
    return (
      <Item key={index} name={name} image={image} price={price}></Item>
    )
  });

  return (
    <Div>
      {gamesList}
    </Div>
  )
}

const Div = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  justify-items: center;
  gap: 2rem;
`