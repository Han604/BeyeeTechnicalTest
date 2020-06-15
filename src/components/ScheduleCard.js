import React from 'react';
import styled from 'styled-components';

//Assets
import { FaHome, FaRegComments } from 'react-icons/fa'

//takes individual appointment data and displays appt card. 
//if completly filled out with data it will display a standard card with a grey tab, if it's not completed it will be green tab

const ScheduleCard = ({data}) => { 
  const {isLate, duration, clientName, projectName, taskName, location, date} = data;
  const isCompleted = 
    date && 
    duration && 
    clientName && 
    projectName && 
    taskName && 
    location 
    ? true
    : false;
  return (
    <Wrapper>
      <Tab 
        isLate = {isLate}
        isCompleted = {isCompleted}
      />
        {isCompleted &&
          <CardHead>
            <>
              <Date isLate = {isLate}>
                <div>
                  {date}
                </div>
              </Date>
              <DurationDiv>
                {duration}
              </DurationDiv>
            </>
          </CardHead>
        }
      <InfoDiv>
        <ClientDiv>{clientName}</ClientDiv>
        {isCompleted &&
          <>
            <ProjectDiv>{projectName}</ProjectDiv>
            <TaskDiv>{taskName}</TaskDiv>
          </>
        }
      </InfoDiv>
      <CardFooter>
        {isCompleted &&
          <>
            <LeftFooterDiv>
              <FaHome color={'#CBCBCB'}/>
              <LocationDiv>{location}</LocationDiv>
            </LeftFooterDiv>
            <FaRegComments color={'#B7BFD6'}/>
          </>
        }
      </CardFooter>
    </Wrapper>
  )
}

const InfoDiv = styled.div`
  margin: 0 16px 0px 0px;
`

const LeftFooterDiv = styled.div`
  display: flex;
`

const LocationDiv = styled.div`
  color: #617496;
  text-transform: capitalize;
  font-size: 12px;
  line-height: 16px;
  margin-left: 8px;
`

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TaskDiv = styled.div`
  color: #818A9E;
  font-feature-settings: 'tnum' on, 'lnum' on;
  font-size: 14px;
  line-height: 16px;
`

const ProjectDiv = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  font-feature-settings: 'tnum' on, 'lnum' on;
  color: #1F2530;
`

const ClientDiv = styled.div`
  font-weight: 500;
  color: #687185;
  letter-spacing: 0.045em;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 16px;
`

const CardHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`

const DurationDiv = styled.div`
  color: #535C6E;
  font-size: 12px;
  text-align: right;
  font-weight: 500;
`

const Date = styled.div`
  border-radius: 2px;
  padding: 0px 4px;
  background-color: ${(props) => props.isLate === true ? 'rgba(255, 114, 114, 0.2)' : '#F0F2FA' };
  color:${(props) => props.isLate === true ? '#FF7272' : '#424B5B'};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 10px;
  font-weight: 500;
  line-height: 120%;
  text-transform: uppercase;
` 

const Wrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: #FFFFFF;
  width: calc(100% - 16px);
  padding: 8px;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  overflow-x: hidden;
  cursor: pointer;
`

const Tab = styled.div`
  position: relative;
  top: -8px;
  left: 75%;
  width: 32px;
  height: 4px;
  border-radius: 0px 0px 4px 4px;
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.15), inset 0px 0px 3px rgba(0, 0, 0, 0.1);
  background : ${(props) => props.isCompleted ? props.isLate === true ? '#FF7272' : '#DBDBDB' : '#B8E4A3'};
`

export default ScheduleCard;