import React from 'react';
import styled from 'styled-components';

//Icons
import { FaRegFolderOpen, FaChevronDown } from 'react-icons/fa'

const AddButton = () => {
  return (
    <RoundedButton>
      <FaRegFolderOpen style={{marginLeft:'12px'}} width={'16px'} height={'16px'} color={'#687185'}/>
      <TitleDiv>Ajouter</TitleDiv>
      <FaChevronDown style={{marginRight:'12px'}} width={'16px'} height={'16px'} color={'#B7BFD6'}/>
    </RoundedButton>
  )
}

const TitleDiv = styled.div`
  margin: 0px 12px 0px 12px;
`

const RoundedButton = styled.button`
  border-radius: 25px;
  border: none;
  outline: none;
  background-color: #343C4B;
  color: white;
  height: 42px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08);
  cursor: pointer;
`

export default AddButton