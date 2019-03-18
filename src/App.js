import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import arrowImage from './assets/right-arrow.svg';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Switch, withRouter } from 'react-router-dom';
import Slide from "./Slide"

const BlueDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
  position: absolute;
  z-index: 1;
  
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

const RedDiv = styled(BlueDiv)`
  background-color: red;
  
`

const YellowDiv = styled(BlueDiv)`
  background-color: yellow;
`

const RightArrow = styled.img`
  width: 27px;
  height: auto;
  cursor: pointer;
  z-index: 2;
  margin-right: 2px;
  margin-left: 2px;
  -webkit-filter: invert(1);

  &:hover {
    -webkit-filter: invert(.7);
  }
`

const LeftArrow = styled(RightArrow)`
  transform: rotate(180deg);
`

const MainDiv = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  overflow: hidden;
`

const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  
`

const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const ArrowHolder = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 48.7%;
  opacity: .5;
  z-index: 5;
  align-items: center;
  
`

const childFactoryCreator = (classNames) => (
  (child) => (
    React.cloneElement(child, {
      classNames
    })
  )
)

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      leftSlide: true
    }
  }


  getpathInt = (path) => {
    console.log("pathname", path)
    let pathNameArray = path.split("/");
    let oldSlideIndex = parseInt(pathNameArray[pathNameArray.length - 1])

    return oldSlideIndex
  }

  incrementslideIndex = () => {  
    let oldSlideIndex = this.getpathInt(this.props.location.pathname);
    this.storeLastLocation(oldSlideIndex)
    if (oldSlideIndex < 3) {
      let newPathSlideNumber = oldSlideIndex + 1;
      this.props.history.push(`/${newPathSlideNumber}`)
    }
  }

  decrementslideIndex = () => {
    let oldSlideIndex = this.getpathInt(this.props.location.pathname);
    this.storeLastLocation(oldSlideIndex)

    if (oldSlideIndex > 1) {
      let newPathSlideNumber = oldSlideIndex - 1;
      this.props.history.push(`/${newPathSlideNumber}`)
    }
  }

  getLastPathInt = () => {
    this.getpathInt();
  }

  storeLastLocation = (index) => {
    window.lastLocation = index;
  }

  isRightAnimation = () => {

    let currentPathname = this.props.location.pathname
    return window.lastLocation && (window.lastLocation < this.getpathInt(currentPathname))
  }


  render() {
    console.log(this.props);

    let blueSlide = <BlueDiv key={1}>yo</BlueDiv>;
    let redDiv = <RedDiv key={2}>hello</RedDiv>;
    let yellowDiv = <YellowDiv key={3}>stuff</YellowDiv>;
    let slides = [blueSlide, redDiv, yellowDiv];

    let right = this.isRightAnimation();

    console.log(this.props)
    console.log(window.lastLocation)
    
    
    return (

      <div className="App">
        <ContainerDiv>
          <ArrowHolder>
            <LeftArrow onClick={this.decrementslideIndex} src={arrowImage}></LeftArrow>
            <RightArrow onClick = {this.incrementslideIndex} src={arrowImage}></RightArrow>
          </ArrowHolder>
          <MainDiv>
            
              <SlideContainer>
                <TransitionGroup
                  childFactory={childFactoryCreator(right? "example": "exampletwo")}>
                  <CSSTransition
                  key={this.props.location.key}
                  classNames={right? "example": "exampletwo"}
                  timeout={1000}>
                    <Switch location={this.props.location}>
                      <Route exact path="/1" render={() => (<Slide slideIndex={1}/>)} />
                      <Route exact path="/2" render={() => (<Slide slideIndex={2}/>)} />
                      <Route exact path="/3" render={() => (<Slide slideIndex={3}/>)} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </SlideContainer>
            
          </MainDiv>
        </ContainerDiv>
        </div>


    );
  }
}


export default withRouter(App);
