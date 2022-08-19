import React from 'react';
import { Game } from './util/Interfaces';
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';
import { addCircleOutline, removeCircleOutline } from 'ionicons/icons';

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
          <span></span>
        </div>
        <div>
          <span></span>
          <h3>SUBTOTAL</h3>
        </div>
        <div>
          <div>
            <IonIcon icon={removeCircleOutline} style={{ marginRight: '1rem' }}></IonIcon>
            <IonIcon icon={addCircleOutline}></IonIcon>
          </div>
          <h2>${price * quantity} AUD</h2>
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
  text-overflow: ellipsis;
  width: 100%;

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
  
  ion-icon {
    font-size: 2rem;
    cursor: pointer;
  }

  img {
    height: 200px;
    width: 80%;
    object-fit: cover;
    object-position: top;
  }
  
  max-width: 900px;
  @media (max-width: 900px) {
    max-width: 100vw;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    section {
      padding-left: 0;
      padding-top: 1rem;
    }
    img {
      height: 300px;
      width: 100%;
    }
  }
`