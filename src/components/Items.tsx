import React from 'react';
import { Item } from './Item';
import { ItemProps } from './util/Interfaces';
import styled from 'styled-components';

export const Items = ({ games, handleClick }: ItemProps) => {
  let gamesList = games.map(({ id, name, image, price }) => {
    return (
      <Item key={id} id={id} name={name} image={image} price={price} handleClick={handleClick}></Item>
    )
  });

  return (
    <Div>
      {gamesList}
    </Div>
  )
}

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  gap: 2rem;
  
  max-width: 1700px;
  @media (max-width: 1280px) {
    max-width: 100vw;
  }
`