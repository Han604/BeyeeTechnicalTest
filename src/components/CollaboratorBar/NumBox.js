import React from 'react';
import styled from 'styled-components';

const NumBox = ({value}) => {
  return (
    <Num>{value}</Num>
  )
}

const Num = styled.div`
  width: calc(100% - 1px);
  height: calc(100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #F0F0F0;
  border-bottom: 1px solid #F0F0F0;
  background: #FFFFFF;
  color: #29303D;
  `

export default NumBox