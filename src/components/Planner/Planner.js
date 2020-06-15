import React from 'react';
import styled from 'styled-components';

//components
import LateAppointments from './LateAppointments';
import Appointments from './Appointments'

const Planner = () => {
  return (
    <Wrapper>
      <LateAppointments/>
      <Appointments/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 369px);
  display: flex;
  z-index: -3;
`

export default Planner