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
  display: flex;
  flex: 0;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  
  width: 100%;
  max-width: 1700px;
`