import React from 'react';
import styled from 'styled-components';

export const Item = ({ id, name, image, price, quantity, handleClick }: any) => {
  // useState
  const handleClickItem = (event: any) => {
    handleClick(event);
  }


  return (
    <Div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h2>${price}</h2>
      <button onClick={handleClickItem} data-id={id}>Add To Cart</button>
    </Div>
  )
}

const Div = styled.div`
  background-color: white;
  box-shadow: 4px 4px 8px 1px rgba(60, 60, 60, 0.1);
  border-radius: 8px;
  width: 300px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  // transition: transform 0.25s; 
  // &:hover {
  //   transform: scale(1.03);
  // }

  button {
    padding: 1rem 2rem;
    border: 0;
    border-radius: 1rem;
    background-color: rgb(60, 60, 60);
    color: white;
  }

  button:hover {
    background-color: rgb(120, 120, 120);
  }

  h2 {
    font-size: 1.5rem;
  }

  img {
    max-width: 300px;
    min-height: 250px;
    object-fit: cover;
  }

  @media (max-width: 700px) {
    h2 {
      font-size: calc(1rem + 1vw);
    }
  }
`