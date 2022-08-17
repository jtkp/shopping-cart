import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = () => {
  // useState

  return (
    <StyledDiv>
      <Link to='/'>
        <button>Generic Game Store</button>
      </Link>
      <Link to='/shop'>
        <button>Shop</button>
      </Link>
      <input type="text" placeholder='Search' />
      <button>Cart</button>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  
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