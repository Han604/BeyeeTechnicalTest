import React from 'react';
import styled from 'styled-components';

//components

import ScheduleCard from '../ScheduleCard';

const LateCardHolder = ({data}) => { //takes full dataset and passes individual appointments down as props to the scheduleCard component
  return(
    <CardHolder>
      {
        data.map(apt => {
          return <ScheduleCard data = {apt}/>
        })
      }
    </CardHolder>
  )
}

const CardHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(65% - 8px);
  @media (max-width: 600px) {
    width: 100%;
  }
`

export default LateCardHolder