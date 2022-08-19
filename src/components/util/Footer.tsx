import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  // useState

  return (
    <StyledDiv>
      <p>Website by Justin Pham</p>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  min-width: 100vw;
  margin-top: auto;
  padding: 1rem;
  text-align: center;
  background-color: white;
`