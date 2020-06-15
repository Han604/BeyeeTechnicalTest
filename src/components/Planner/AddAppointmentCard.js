import React from 'react';
import styled from 'styled-components';

//Assets
import { FaRegCalendarPlus } from 'react-icons/fa'

const AddAppointmentCard = () => { // add an onClick event listener to open a modal to create a new appointment
  return (
    <Wrapper>
      <FlexDiv>
        <FaRegCalendarPlus color={'#FFA556'}/>
        <TextDiv>
          Planifier une tâche
        </TextDiv>
      </FlexDiv>
    </Wrapper>
  )
}

const TextDiv = styled.div`
  font-size: 12px;
  font-weight: 500;
  font-feature-settings: 'tnum' on, 'lnum' on;
  color: #535C6E;
  margin-top: 8px;
`

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const Wrapper = styled.div`
  width: 100%;
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.15), inset 0px 0px 3px rgba(0, 0, 0, 0.1);
  padding: 36px 0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FCFDFF;
  cursor: pointer;
`

export default AddAppointmentCard