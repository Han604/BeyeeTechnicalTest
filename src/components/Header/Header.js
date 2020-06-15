import React from 'react';
import styled from 'styled-components';

//COMPONENTS
import HeaderButton from './HeaderButton'; //takes title and link prop, title required
import Logo from './Logo';
import AddButton from './AddButton';
import Toolbar from './Toolbar';
import Avatar from './Avatar'; // takes image

//ASSETS
import ProfilePicture from '../../Assets/ProfilePicture.png'

const Header = () => {
  return(
    <Wrapper>
      <LeftHeaderDiv>
        <Logo/>
        <HeaderButton title={'Gestion'} link={'enter url here'}/>
        <HeaderButton title={'Temps'} link={'enter url here'}/>
        <HeaderButton title={'Analyse'} link={'enter url here'}/>
      </LeftHeaderDiv>
      <RightHeaderDiv>
        <AddButton/>
        <Toolbar/>
        <Avatar userAvatar={ProfilePicture}/> 
      </RightHeaderDiv>
    </Wrapper>
  )
}

const LeftHeaderDiv = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1.5%;
`

const RightHeaderDiv = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1.5%;
`

const Wrapper = styled.div`
  background-color: #1F2530;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default Header