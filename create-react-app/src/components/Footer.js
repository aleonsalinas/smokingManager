import React from 'react';
import Fab from '@material-ui/core/Fab';
import Smoking from '@material-ui/icons/SmokingRooms';

import styled from 'styled-components';


const Container = styled.div`
  background-color: #2b2626;
  height: 60px;
  text-align: center;
  display: flex;
  justify-content: space-around;
`
const Achivement = styled.div`
`

const FooterItem = styled.div`
  color: white;
  border-left-color: #9c9c9c;
  border-left-width: 2px;
  border-left-style: solid;
`

const Footer = ({ tripStarted }) => (
  <Container>
    <Achivement>
      LOGROS
      <br/>
      {tripStarted ? 'Viajando desde HOY' : 'El primer logro es iniciar el viaje'}
    </Achivement>
    {!tripStarted && <FooterItem>
    {'Iniciar Viaje'}
    </FooterItem>}
  </Container>
);

export default Footer;
