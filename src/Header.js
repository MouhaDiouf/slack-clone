import React from 'react';
import styled from 'styled-components';
function Header() {
  return (
    <HeaderContainer>
      <h1>Header</h1>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  color: white;
  background-color: red;
`;
