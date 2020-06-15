import React from 'react';
import styled from 'styled-components';

//COMPONENTS
import CollaboratorBox from './CollaboratorBox'; // takes name, post and avatar prop, all are required
import NumBox from './NumBox'; //takes value prop

//Assets
import ProfilePicture from '../../Assets/ProfilePicture.png'

const CollaboratorBar = () => {
  return (
    <Wrapper>
      <CollaboratorBox 
        name={'Nom du Collaborateur'}
        post={'Post du Collaborateur'}
        avatar={ProfilePicture}
      />
      <NumWrapper>
        <NumBox value={'0/3'}/>
        <NumBox value={'0/3'}/>
        <NumBox value={'0/3'}/>
        <NumBox value={'0/3'}/>
        <NumBox value={'0/3'}/>
        <NumBox value={'0/3'}/>
        <NumBox value={'0/3'}/>
      </NumWrapper>
    </Wrapper>  
  )
}

const NumWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`


const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  opacity: 0.99;
`

export default CollaboratorBar