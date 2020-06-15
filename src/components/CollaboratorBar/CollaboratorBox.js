import React from 'react';
import styled from 'styled-components';

//Assets
import {FaChevronDown} from 'react-icons/fa';

//components
import Avatar from '../Header/Avatar'

// render avatar, name and post based on the props passed down to it.

const CollaboratorBox = ({avatar, name, post}) => {
  return (
    <Wrapper>
      <Info>
        <Avatar userAvatar={avatar}/>
        <UserInfo>
          <NameDiv>{name}</NameDiv>
          <PostDiv>{post}</PostDiv>
        </UserInfo>
      </Info>
      <FaChevronDown color={'#CBCBCB'}/>
    </Wrapper>
  )
}

const PostDiv = styled.div`
  font-variant: small-caps;
  color: #B7BFD6;
  font-size: 12px;
  font-weight: bold;
`

const NameDiv = styled.div`
  font-variant: small-caps;
  color: #535C6E;
  font-weight: bold; 
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

const Info = styled.div`
  display: flex;
`

const Wrapper = styled.div`
  width: calc(20% - 32px);
  height: 100%;
  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.1);
  background: #FCFCFC;
  border-right: 1px solid #F0F0F0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: -1;
  position: relative;
  cursor: pointer;

`

export default CollaboratorBox;