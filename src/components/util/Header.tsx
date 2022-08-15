import React from 'react';
import styled from 'styled-components';

export const Header = () => {
  // useState

  return (
    <StyledDiv>
      <button>Generic Game Store</button>
      <button>Shop</button>
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