import React from 'react';
import { Game } from './util/Interfaces';
import styled from 'styled-components';

export const CartItem = ({ id, name, image, price, quantity }: Game) => {

  return (
    <Div>
      <img src={image} alt={name} />
      <section>
        <div>
          <h3>TITLE</h3>
          <h3>PRICE</h3>
        </div>
        <div>
          <h2 style={{ marginBottom: '1rem' }}>{name}</h2>
          <h2>${price} AUD</h2>
        </div>
        <div>
          <h3>QUANTITY</h3>
          <span></span>
        </div>
        <div>
          <h2>{quantity}</h2>
          <h2>Buttons</h2>
        </div>
        <div>
          <span></span>
          <h2 style={{ marginTop: '1rem' }}>Subtotal: ${price * quantity} AUD</h2>
        </div>
      </section>
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
  background-color: white;

  section {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    width: 100%;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 250px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    section {
      padding-left: 0;
      padding-top: 1rem;
    }
    img {
      width: 100%;
    }
  }
`