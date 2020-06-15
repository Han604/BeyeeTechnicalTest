import React from 'react';
import styled from 'styled-components';

//components
import LateButton from './LateButton';
import LateCardHolder from './LateCardHolder' //takes whole dataset of late items as props to render new cards with late conditional rendering

const LateAppointments = () => {
  const dataset = [ //test data
    {
      isLate:true,
      date:'nov 15',
      duration:'2h',
      clientName:'Air Québec',
      projectName:'Expertise 2019',
      taskName:'Reporting/Situation',
      location:'Domicile'
    },
    {
      isLate:true,
      date:'nov 15',
      duration:'2h',
      clientName:'Air Québec',
      projectName:'Expertise 2019',
      taskName:'Reporting/Situation',
      location:'Domicile'
    }
  ]
  return (
    <Wrapper>
      <LateButton/>
      <LateCardHolder data={dataset}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: calc(20% - 15px);
  background: #F2F4F7;
  box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.08);
  display: flex;
  padding: 8px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export default LateAppointments