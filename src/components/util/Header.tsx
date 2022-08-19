import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { cartOutline, gameControllerOutline } from 'ionicons/icons';

export const Header = ({ quantity }: { quantity: number }) => {
  return (
    <Container>
      <Div>
        <Link to='/'>
          <IonIcon icon={gameControllerOutline}></IonIcon>
          <h1>Game Store</h1>
        </Link>
        <Link to='/shop'>
          <h1>Catalog</h1>
        </Link>
        <Link to='/cart'>
          <IonIcon icon={cartOutline}></IonIcon>
          {quantity ? <h3>{quantity}</h3> : null}
        </Link>
      </Div>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  z-index: 1;
  min-width: 100vw;
  background-color: white;
  display: flex;
  justify-content: center;
`

const Div = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: white;
  
  width: 1280px;
  @media (max-width: 1280px) {
    max-width: 100vw;
  }

  a:first-child {
    margin-right: auto;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
  }

  a:first-child > ion-icon {
    margin-right: 0.5rem;
    font-size: 3rem;
  }
  
  a:first-child > h1{
    font-size: 1.5rem;
  }

  a:nth-child(2) {
    margin-right: 2rem;
  }

  ion-icon {
    font-size: 2rem;
  }

  h1 {
    font-size: 1rem;
  }
  
  button {
    padding: 1rem 2rem;
  }

  h3 {
    font-size: 0.9rem;
    background-color: rgb(128, 0, 0);
    color: white;
    width: 1.25rem;
    height: 1.25rem;
    text-align: center;
    line-height: 1.1rem;

    position: absolute;
    right: 0.5rem;
    top: 1rem;
    border: 1px solid black;
    border-radius: 50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
  }
`