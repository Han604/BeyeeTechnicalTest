import React from 'react';
import styled from 'styled-components';

//Assets
import {FaExclamationTriangle} from 'react-icons/fa'

const LateButton = () => {
  return (
    <StyledButton>
      <FaExclamationTriangle style={{color:'#FF7272', opacity: '0.5'}} size={15}/>
      <div style={{marginLeft:'8px', fontSize: '9px'}}>
        En Retard
      </div>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 114, 114, 0.2);
  padding: 8px;
  border-radius: 4px;
  border: none;
  outline: none;
  height: 32px;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #FF7272;
  width: 35%;
  white-space: nowrap;
  margin-right: 8px;
  margin-bottom: 8px;
  overflow-x: hidden;
  @media (max-width: 600px) {
    width: 100%;
  }
  `

export default LateButton