import React from 'react';
import styled from 'styled-components';

const Day = ({day, number, isActive}) => { //isActive is a prop that causes the component to be styled active
  return (
    <DayDiv isActive = {isActive}>
      <div>{day}</div>
      <div>{number}</div>
    </DayDiv>
  )
}

const DayDiv = styled.div`
  width: calc(100% - 1px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-right: 1px solid #F0F2FA;
  background-color: ${(props) => props.isActive ? '#FFF9F2' : '#FFFFFF'};
  overflow-x: hidden;
  border-bottom: ${(props) => props.isActive && '2px solid #FFA556'};
  color: ${(props) => props.isActive ? '#F78038' : '#818A9E'};
`

export default Day