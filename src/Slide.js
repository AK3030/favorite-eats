import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import LittleStarImage from './assets/LittleStar.jpg';
import PizzaLogoImage from './assets/pizzalogo3.svg';
import OasisGrillImage from './assets/oasisgrillimage.jpg';
import SkewerLogoImage from './assets/skewer.svg';
import UmamiBurgersImage from './assets/umamiburgers.jpg';
import BurgerLogoImage from './assets/burger.svg';
import SingleSlide from './SingleSlide';

const MainDiv = styled.div`
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
    transition: transform 250ms ease-in-out;
  }

  &.example-exit {
    transform: translate(0%);
  }

  &.example-exit.example-exit-active {
    transform: translate(-100%);
    transition: transform 250ms ease-in-out;
  }

  &.exampletwo-enter {
    transform: translate(-100%);
  }

  &.exampletwo-enter-active {
    transform: translate(0%);
    transition: transform 250ms ease-in-out;
  }

  &.exampletwo-exit {
    transform: translate(0%);
  }

  &.exampletwo-exit.exampletwo-exit-active {
    transform: translate(100%);
    transition: transform 250ms ease-in-out;
  }

`

class Slide extends Component {

  render() {

    return (
        <MainDiv>
          {this.props.slideIndex === 1? 
            <SingleSlide
            titleText="LITTLE STAR PIZZA"
            logoSource={PizzaLogoImage}
            imageSource={LittleStarImage}
            />
          : this.props.slideIndex === 2?
            <SingleSlide
            titleText="OASIS GRILL"
            logoSource={SkewerLogoImage}
            imageSource={OasisGrillImage}
            />
          :
            <SingleSlide
            titleText="UMAMI BURGER"
            logoSource={BurgerLogoImage}
            imageSource={UmamiBurgersImage}
            />
          }
          
        </MainDiv>

    );
  }
}


export default Slide;