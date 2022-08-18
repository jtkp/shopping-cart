import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { cartOutline } from 'ionicons/icons';

export const Header = () => {
  // useState

  return (
    <StyledDiv>
      <Link to='/'>
        <h1>Generic Game Store</h1>
      </Link>
      <Link to='/shop'>
        <h1>Shop</h1>
      </Link>
      <Link to='/cart'>
        <IonIcon icon={cartOutline}></IonIcon>
      </Link>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  padding: 1rem;
  
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

// shop
  // cards x 16
    // card
      // image
      // title
      // price
  // cart