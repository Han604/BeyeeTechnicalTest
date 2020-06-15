import React from 'react';
import styled from 'styled-components';

const Title = () => {
  const [title, setTitle] = React.useState('Mon Planning'); // user can change the name of their organizer, title value can be passed to back end
  return (
    <Wrapper>
      <StyledInput type='text' placeholder={title} onChange={(ev) => setTitle(ev.target.value)}/>
    </Wrapper>
  )
}

const StyledInput = styled.input`
  width: 100%;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 24px;
  outline: none;
  border: none;
  margin-left: 1.5%;
  color: #424B5B;
  ::placeholder {
    color: #424B5B;
  }
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 24px;
  height: 64px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 1px rgba(0, 0, 0, 0.1);
  z-index: 3;
  background: #FFFFFF;
`

export default Title