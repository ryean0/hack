import NoteButton from './components/Buttons'
import React, { useState, useEffect } from "react";
import Background from '../src/resources/wallpaper.png';
import BottleIcon from '../src/resources/bottle.png';
import styled, {keyframes} from 'styled-components';
import { bounce, pulse, shake } from 'react-animations';

const test = [0, 1, 2, 1, 0, 1, 2, 1];
const test2 = [1, 0, 0, 1, 2, 1, 0, 2]
const shakeAnimation = keyframes`${shake}`
const bounceAnimation = keyframes`${bounce}`

const ShakeDiv = styled.div`
  animation: infinite 30s ${shakeAnimation};
`;

const BounceDiv = styled.div`
  animation: infinite 30s ${bounceAnimation};
`;


function Bottle(props) {
  let r = Math.random() * (30-45) + 45;
  return (
    <div>
      {}
      <img src={BottleIcon} alt="text" width="60" height="60" style={{transform: `rotate(${r}deg)`, margin: '50px'}}/>
    </div>
  )
}

function App() {
  setTimeout(() => window.location.reload, 5);
  return (
      <div style={{ backgroundImage:`url(${Background})`, minHeight: '100vh', minWidth: '100vw', backgroundSize: 'cover'}}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', position: 'absolute', bottom: 100}}>
              {test.map((e, index) => (
                <div>
                  <BounceDiv>
                    <ShakeDiv>
                      <Bottle key={index} val={e}/>
                    </ShakeDiv>
                  </BounceDiv>
                </div>
              ))} 
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', position: 'absolute', bottom: 0}}>
              {test2.map((e, index) => (
                <div>
                  <BounceDiv>
                    <ShakeDiv>
                      <Bottle key={index} val={e}/>
                    </ShakeDiv>
                  </BounceDiv>
                </div>
              ))} 
          </div>
          <NoteButton />
      </div>
  );
}
export default App;
