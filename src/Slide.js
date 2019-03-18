import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import LittleStarImage from './assets/LittleStar.jpg';
import PizzaLogoImage from './assets/pizzalogo3.svg';
import OasisGrillImage from './assets/oasisgrillimage.jpg';
import SkewerLogoImage from './assets/skewer.svg';
import UmamiBurgersImage from './assets/umamiburgers.jpg';
import BurgerLogoImage from './assets/burger.svg';


const BlueDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: purple;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  
  &.example-enter {
    transform: translate(100%);
  }

  &.example-enter-active {
    transform: translate(0%);
    transition: transform 1000ms ease-in-out;
  }

  &.example-exit {
    transform: translate(0%);
  }

  &.example-exit.example-exit-active {
    transform: translate(-100%);
    transition: transform 1000ms ease-in-out;
  }


  &.exampletwo-enter {
    transform: translate(-100%);
  }

  &.exampletwo-enter-active {
    transform: translate(0%);
    transition: transform 1000ms ease-in-out;
  }

  &.exampletwo-exit {
    transform: translate(0%);
  }

  &.exampletwo-exit.exampletwo-exit-active {
    transform: translate(100%);
    transition: transform 1000ms ease-in-out;
  }

`

const TopDiv = styled.div`
  height: 50%;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column-reverse;
`

const BottomDiv = styled.div`
  height: 50%;
  width: 100%;
  background-color: #141414;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LittleStar = styled.img`
  width: 100%;
  height: auto;
`

const FoodLogo = styled.img`
  width: 70px;
  height: auto;
  -webkit-filter: invert(1);
`

const Container = styled.div`
  height: 100%;
  width: 100%;
`

const FoodBackgroundDiv = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${props => (props.image)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

class Slide extends Component {

  render() {

    return (
        <BlueDiv>
          {this.props.slideIndex === 1? 
            <Container>
            <TopDiv>
              <FoodBackgroundDiv image={LittleStarImage}></FoodBackgroundDiv>
            </TopDiv>
            <BottomDiv>
              <FoodLogo src={PizzaLogoImage}></FoodLogo>
            </BottomDiv>
          </Container>
          : this.props.slideIndex === 2?
          <Container>
            <TopDiv>
            <FoodBackgroundDiv image={OasisGrillImage}></FoodBackgroundDiv>
            </TopDiv>
            <BottomDiv>
              <FoodLogo src={SkewerLogoImage}></FoodLogo>
            </BottomDiv>
          </Container>
          
          :
          <Container>
            <TopDiv>
            <FoodBackgroundDiv image={UmamiBurgersImage}></FoodBackgroundDiv>
            </TopDiv>
            <BottomDiv>
              <FoodLogo src={BurgerLogoImage}></FoodLogo>
            </BottomDiv>
          </Container>
          
          }
          
        </BlueDiv>

    );
  }
}


export default Slide;