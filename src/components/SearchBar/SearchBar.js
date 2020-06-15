import React from 'react';
import styled from 'styled-components';

//ASSETS
import {FaSearch} from 'react-icons/fa'

//COMPONENTS
import Day from './Day'
import Month from './Month'

const SearchBar = () => {
  return(
    <Wrapper>
        <SearchDiv>
          <InputWrapper>
            <FaSearch color={'#DBDBDB'}/>
            <SearchInput type ='text' placeholder='Rechercher'/>
          </InputWrapper>
        </SearchDiv>
        <DateDiv>
          <Month month={'Janvier'}/>
          <DayDiv>
            <Day day={'Lundi'} number={'01'}/>
            <Day day={'Mardi'} number={'02'} isActive={true}/>
            <Day day={'Mercredi'} number={'03'}/>
            <Day day={'Jeudi'} number={'04'}/>
            <Day day={'Vendredi'} number={'05'}/>
            <Day day={'Samedi'} number={'06'}/>
            <Day day={'Dimanche'} number={'07'}/>
          </DayDiv>
        </DateDiv>
    </Wrapper>
  )
}


const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 12px;
  width: 80%;
  font-variant: small-caps;
  ::placeholder {
    color: #DBDBDB;
  }
`

const DayDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #818A9E;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 1px rgba(0, 0, 0, 0.1);
  z-index: 1;
`

const DateDiv = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 80%;
  border-left: 1px solid #F0F2FA;
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 12px);
  height: 56px;
  border-radius: 4px;
  padding-left: 12px;
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.15), inset 0px 0px 3px rgba(0, 0, 0, 0.1);
`

const SearchDiv = styled.div`
  width: calc(20% - 8px);
  padding: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 1px rgba(0, 0, 0, 0.1);
`

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
`

export default SearchBar