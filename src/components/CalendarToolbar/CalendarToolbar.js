import React from 'react';
import styled from 'styled-components';

//COMPONENTS
import CalendarButtonAlt from './CalendarButtonAlt'; //takes counter icon and title prop, title is necessity
import CalendarButton from './CalendarButton'; //takes icon1 title and icon 2 prop, icon1 is left icon icon2 is right icon

//ASSETS
import { FaMapMarkerAlt, FaArrowRight, FaArrowLeft, FaCalendar, FaChevronDown, FaCalendarWeek, FaPause, FaSlidersH} from 'react-icons/fa' 


const CalendarToolbar = () => {
  const conflits = {value:10};
  return(
    <Wrapper>
      <HeaderLeft>
        <CalendarButton Icon1={FaMapMarkerAlt} title={`Aujourd\'hui`}/>
        <CalendarButton Icon1={FaArrowLeft}/>
        <CalendarButton Icon1={FaArrowRight}/>
        <CalendarButton Icon1={FaCalendar} Icon2={FaChevronDown} title={`lundi 07 octobre — dimanche 13 octobre`}/>
        <CalendarButton Icon1={FaCalendarWeek} Icon2={FaChevronDown} title={`semaine`}/>
        <CalendarButton Icon1={FaPause} title={`Écran divisé`}/>
      </HeaderLeft>
      <HeaderRight>
        <CalendarButtonAlt title={'conflits'} counter={conflits}/>
        <CalendarButtonAlt title={'personnaliser'} Icon={FaSlidersH}/>
      </HeaderRight>
    </Wrapper>
  )
}

const HeaderRight = styled.div`
  display: flex;
`

const HeaderLeft = styled.div`
  display: flex;
`

const Wrapper = styled.div`
  height: 56px;
  width: 100%;
  background: #FFF9F2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: -1;
  position: relative;
`

export default CalendarToolbar