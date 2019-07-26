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

const Row = styled.div`
  display: flex;
  justify-content: center;
`

const MiddleBubble = styled.div`
  background-color: white;
  color: grey;
  border-radius: 15px;
  width: 120px;
  text-align: center;
  margin: 5px;
  height: 75px;
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

const Smoked = () => {
  const [spent, setSpent] = useState(8600);
  const [dailyCigarettes, setCount] = useState(2);

  const getDaySmoked = () => {
    return dailyCigarettes;
  };

  const getMonthSmoked = () => {
    return 13 + dailyCigarettes;
  };
  const getTotalMoneySaved = () => spent;

  const addCigarette = () => {
    console.log('cigarette added');
    setCount(dailyCigarettes + 1);
    setSpent(spent + 175);
  }

  return (
    <SmokedContainer>
      <DailyAmount>
        ¿Cuánto has fumado hoy?
        <br/>
        {getDaySmoked()}
      </DailyAmount>
      <Row>
        <MiddleBubble>
          ¿Y este mes?
          <br/>
          {getMonthSmoked()}
        </MiddleBubble>
        <MiddleBubble>
          He gastado
          <br/>
          $ {getTotalMoneySaved()}
        </MiddleBubble>
      </Row>
      <AddCigarrette onClick={addCigarette}>
        <Smoking />
      </AddCigarrette>
    </SmokedContainer>
)};

export default Smoked;
