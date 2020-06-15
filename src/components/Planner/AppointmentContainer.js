import React from 'react';
import styled from 'styled-components';

//components
import ScheduleCard from '../ScheduleCard'; //takes individual appointments as props to generate appointment cards
import AddAppointmentCard from './AddAppointmentCard';

const AppointmentContainer = ({data}) => { //takes the data prop to generate the number of cards
  const [hover, setHover] = React.useState(false)
  return (
    <CardContainer onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {
        data.map(apt => {
          return <ScheduleCard data = {apt}/>
        })
      }
      {hover === true && <AddAppointmentCard/>}
    </CardContainer>
  )
}

const CardContainer = styled.div`
  border-right: 1px solid #F0F0F0;
  width: calc(100% - 17px);
  display: flex;
  flex-direction: column;
  padding: 8px;
  overflow-x: hidden;
  /* height: 100vh; */
`

export default AppointmentContainer