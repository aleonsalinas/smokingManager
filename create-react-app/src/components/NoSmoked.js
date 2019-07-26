import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import Smoking from '@material-ui/icons/SmokingRooms';

import styled from 'styled-components';


const SmokedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  height: 350px;
  justify-content: space-around;
`

const DailyAmount = styled.div`
  background-color: white;
  color: grey;
  border-radius: 15px;
  text-align: center;
  width: 80%;
  height: 20%;
`

const AddCigarrette = styled.div`
  border-radius: 50%;
  display: inline-block;
  background-color: #2b2626;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
`


const NoSmoked = () => {
  const [saved, setSaved] = useState(175);
  const [dailyCigarettes, setCount] = useState(1);

  const getNonDaySmoked = () => dailyCigarettes;
  const getTotalMoneySaved = () => saved;

  const reset = () => {
    setSaved(0);
    setCount(0);
  };

  return (
    <SmokedContainer>
      <DailyAmount>
        He dejado de fumar
        <br/>
        {getNonDaySmoked()}
      </DailyAmount>
      <DailyAmount>
        He dejado de gastar
        <br/>
        $ {getTotalMoneySaved()}
      </DailyAmount>
      <AddCigarrette>
        <Smoking onClick={reset}/>
      </AddCigarrette>
    </SmokedContainer>
)};

export default NoSmoked;
