import React from 'react';
import styled from 'styled-components';

// conditionally render Icons and Titles based on whether props are passed down to it.

const CalendarButton = ({title, Icon1, Icon2}) => {
  return (
    <StyledButton>
      {Icon1 && <Icon1 color={'#F27633'}/>}
      {title && <TitleDiv>{title}</TitleDiv>}
      {Icon2 && <Icon2 color={'#F27633'}/>}
    </StyledButton>
  )
}

const TitleDiv = styled.div`
  margin: 0 8px;
`

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background-color: white;
  font-size: 14px;
  font-weight: bold;
  height: 40px;
  padding: 8px 16px;
  margin: 2.5px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  text-transform: capitalize;
  overflow-x: hidden;
`

export default CalendarButton;