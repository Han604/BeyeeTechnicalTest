import React from 'react';
import styled from 'styled-components';

//conditionally render based on value of counter prop and icon

const CalendarButtonAlt = ({title, counter, Icon}) => {
  return (
    <StyledButton>
      <ButtonInner>
        {counter && <Counter>{counter.value}</Counter>}
        {Icon && <Icon color={'#FF9949'}/>}
        <TitleDiv>{title}</TitleDiv>
      </ButtonInner>
    </StyledButton>
  )
}

const TitleDiv = styled.div`
  margin: 0 8px;
`

const ButtonInner = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  padding: 8px;
`

const Counter = styled.div`
  height: 18px;
  color: #FF9949;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 20px;
  background: #FFF9F2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.15), inset 0px 0px 3px rgba(0, 0, 0, 0.1);
`

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;  
  white-space: nowrap;
  outline: none;
  border: none;
  background-color: white;
  font-weight: bold;
  height: 40px;
  margin: 2.5px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  text-transform: capitalize;
`

export default CalendarButtonAlt