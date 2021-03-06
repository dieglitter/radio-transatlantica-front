import React, {useState, useEffect }from 'react';
import styled from 'styled-components'
import Canvas from '../components/Canvas'

const HomeStyled = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width:100vw;
height:100vh;
background-color: black;
color: black;

h1{

    font-size: 120px;
    font-family: 'gt_america_standard_light';
}

canvas{
    vertical-align: bottom;
}
`


function Home() {

    
  return (
    <HomeStyled>

        <Canvas width="100vw" height="100vh"/>
                
    </HomeStyled>
  );
}

export default Home;
