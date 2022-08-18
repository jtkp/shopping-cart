import React from 'react';
import styled from 'styled-components';

export const Item = ({ id, name, image, price, quantity, handleClick }: any) => {
  // useState
  const handleClickItem = (event: any) => {
    handleClick(event);
  }


  return (
    <Div>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>${price}</p>
      <button onClick={handleClickItem} data-id={id}>Add To Cart</button>
    </Div>
  )
}

const Div = styled.div`
  background-color: white;
  box-shadow: 4px 4px 8px 1px rgba(60, 60, 60, 0.1);
  border-radius: 1rem;
  width: 300px;
  overflow: hidden;
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  button {
    padding: 1rem 2rem;
    border: 0;
    background-color: rgb(60, 60, 60);
    color: white;
    cursor: pointer;
    width: 250px;
    font-size: 1rem;
  }

  button:hover {
    background-color: rgb(120, 120, 120);
  }

  p {
    margin: 0.5rem;
    font-size: 1.5rem;
  }

  p:nth-child(2) {
    font-weight: 700;
  }

  img {
    max-width: 300px;
    min-height: 250px;
    object-fit: cover;
  }

  @media (max-width: 700px) {
    p {
      font-size: calc(1rem + 1vw);
    }
  }
`