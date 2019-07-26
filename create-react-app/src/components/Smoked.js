import React from 'react';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const Smoked = () => {
  const getDaySmoked = () => 1;
  const getMonthSmoked = () => 10;

  return (
    <div>
      <div>
        ¿Cuánto has fumado hoy?
        {getDaySmoked()}
      </div>
      <br/>
      <div>
        ¿Y este mes?
        {getMonthSmoked()}
      </div>

      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  )
};

export default Smoked;
