import React from 'react';
import styled from 'styled-components';

const Month = ({month}) => { //takes month string prop
  return (
    <MonthDiv>
      {month}
    </MonthDiv>
  )
}

export default Month

const MonthDiv = styled.div`
  padding-left: 16px;
  width: calc(100% - 16px);
  height: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 1px rgba(0, 0, 0, 0.1);
  color: #B7BFD6;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`