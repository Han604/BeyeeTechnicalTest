import React from 'react';
import styled from 'styled-components';

//assets
import beyeelogo from '../../Assets/beyeelogo.png'

const Logo = () => {
  return(
    <StyledLogo src={beyeelogo} alt='Beyee Logo'/>
  )
}

const StyledLogo = styled.img`
  width: 24px;
  height: 24px;
`

export default Logo