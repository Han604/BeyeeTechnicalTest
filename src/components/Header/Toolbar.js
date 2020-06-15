import React from 'react';
import styled from 'styled-components';

//assets
import { FaSearch, FaRegBell, FaRegQuestionCircle, FaCog } from 'react-icons/fa'

const Toolbar = () => {
  return (
    <Wrapper>
      <FaSearch style={{cursor:'pointer'}}/>
      <FaRegBell style={{cursor:'pointer'}}/>
      <FaRegQuestionCircle style={{cursor:'pointer'}}/>
      <FaCog style={{cursor:'pointer'}}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  color: #F0F2FA;
  width: 150px;
  justify-content: space-between;
`

export default Toolbar