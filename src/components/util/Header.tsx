import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { cartOutline, gameControllerOutline } from 'ionicons/icons';

export const Header = () => {
  // useState

  return (
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
      </Link>
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  align-items: center;
  min-width: 100%;
  padding: 1rem;
  background-color: white;

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
`