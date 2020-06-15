import React from 'react';
import styled from 'styled-components';

//Components
import Title from './Title/Title';
import Header from './Header/Header';
import CalendarToolbar from './CalendarToolbar/CalendarToolbar';
import SearchBar from './SearchBar/SearchBar';
import CollaboratorBar from './CollaboratorBar/CollaboratorBar';
import Planner from './Planner/Planner';

const Organizer = () => {
  return (
    <Wrapper>
      <Header/>
      <Title/>
      <CalendarToolbar/>
      <SearchBar/>
      <CollaboratorBar/>
      <Planner/>
      <Footer>
        <CollaboratorBar/>
      </Footer>
    </Wrapper>
  )
}

const Footer = styled.div`
  position: sticky;
  bottom: 0px;
`

const Wrapper = styled.div`
  opacity: 0.99;
`

export default Organizer
