import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

const HeaderButton = ({link, title}) => { //takes title (required) and link (required)
  const history = useHistory();
  
  const linkRouter = (ev) => {
    ev.preventDefault();
    history.push(`${link}`)
  }

  return(
    <HeadButton onClick={(ev)=> linkRouter(ev)}>{title}</HeadButton>
  )
}

const HeadButton = styled.button`
  border: none;
  outline: none;
  color: white;
  width: 100px;
  height: 100%;
  background: transparent;
  cursor: pointer;
`

export default HeaderButton
