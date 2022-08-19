import React from 'react';
import { Game } from './util/Interfaces';
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';
import { addCircleOutline, removeCircleOutline } from 'ionicons/icons';

export const CartItem = ({ id, name, image, price, quantity, handleAdd, handleRemove }: any) => {
  const handleRemoveItem = (event: any) => {
    handleRemove(event);
  }
  const handleAddItem = (event: any) => {
    handleAdd(event);
  }

  return (
    <Div >
      <img src={image} alt={name} />
      <section>
        <div>
          <h3>TITLE</h3>
          <h3>PRICE</h3>
        </div>
        <div>
          <h2 style={{ marginBottom: '1rem', height: '3rem' }}>{name}</h2>
          <h2 style={{ whiteSpace: 'nowrap' }}>${price} AUD</h2>
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
            <IonIcon icon={removeCircleOutline} onClick={handleRemoveItem} data-id={id} style={{ marginRight: '1rem' }}></IonIcon>
            <IonIcon icon={addCircleOutline} onClick={handleAddItem} data-id={id}></IonIcon>
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
  width: 900px;

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
  
  @media (max-width: 960px) {
    max-width: 96vw;
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