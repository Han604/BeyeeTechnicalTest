import React from 'react';
import styled from 'styled-components';

//components
import AppointmentContainer from './AppointmentContainer'; //pass an individual day's appointments as props to generate appointment cards for the day

const Appointments = () => {
  const dataset1 = [ // test data
    {
      isLate:false,
      date:'nov 15',
      duration:'2h',
      clientName:'Air Québec',
      projectName:'Expertise 2019',
      taskName:'Reporting/Situation',
      location:'Domicile'
    },
    {
      isLate:false,
      date:'nov 15',
      duration:'2h',
      clientName:'Air Québec',
      projectName:'Expertise 2019',
      taskName:'Reporting/Situation',
      location:'Domicile'
    },
  ]
  const dataset2 = [  // test data
    {
      isLate:false,
      date:'nov 15',
      duration:'2h',
      clientName:'Air Québec',
      projectName:'Expertise 2019',
      taskName:'Reporting/Situation',
      location:'Domicile'
    },
    {
      isLate:false,
      clientName:'Air Québec',
    },
    {
      isLate:false,
      clientName:'Air Québec',
    },
    {
      isLate:false,
      clientName:'Air Québec',
    },
    {
      isLate:false,
      clientName:'Air Québec',
    },
  ]
  return (
    <Wrapper>
      <AppointmentContainer data = {dataset1}/>
      <AppointmentContainer data = {dataset1}/>
      <AppointmentContainer data = {dataset2}/>
      <AppointmentContainer data = {dataset2}/>
      <AppointmentContainer data = {dataset2}/>
      <AppointmentContainer data = {dataset1}/>
      <AppointmentContainer data = {dataset1}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  background: #F6F9FC;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`

export default Appointments;