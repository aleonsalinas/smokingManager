import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Smoked from './components/Smoked';
import NoSmoked from './components/NoSmoked';
import Footer from './components/Footer';
import { ButtonAppBar } from './components/Menu'

import styled, { ThemeProvider } from 'styled-components';

const theme = {
  gray: '#4A4A4A',
  lightgrey: '#BEBEBE',
  black: '#000000',
  blue: '#4A90E2',
  lightBlueBg: '#ECF2F7',
  lightBlueBorder: '#E3ECF3',
  grayBorder: '#9B9B9B'
}

const Container = styled.div`
  font-family:  'Verdana', sans-serif;
  position: relative;
  height: 100%;
  width: 300px;
  height: 500px;
  background-color: #9c9c9c;
  color: white;
  font-weight: bold;
`;

const TripContainer = styled.div`
  font-family:  'Verdana', sans-serif;
  position: relative;
  height: 100%;
  width: 300px;
  height: 500px;
  background-color: forestgreen;
  color: white;
  font-weight: bold;
`;


const Header = styled.div`
  background-color: #2b2626;
  height: 30px;
  text-align: center;
`

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}

const getUserName = () => 'Javiera Prado'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Container>
          <Box my={4}>
            <Header>
              {getUserName()}
            </Header>
            <Smoked />
            <Footer tripStarted={false}/>
          </Box>
        </Container>

        <TripContainer>
          <Box my={4}>
            <Header>
              {getUserName()}
            </Header>
            <NoSmoked />
            <Footer tripStarted={true}/>
          </Box>
        </TripContainer>
      </div>
    </ThemeProvider>
  );
}
