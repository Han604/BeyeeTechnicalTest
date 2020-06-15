import React from 'react';
import styled from 'styled-components';

const Avatar = ({userAvatar}) => {
  return(
    <UserAvi src={userAvatar}/>
  )
}

const UserAvi = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.15), inset 0px 0px 3px rgba(0, 0, 0, 0.1);
`

export default Avatar