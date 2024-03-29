import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import arrowImage from './assets/right-arrow.svg';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Slide from './Slide';
import {getPathInt, childFactoryCreator} from './util/util'
import { Swipeable } from 'react-touch';

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
	height: auto;
	position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
  margin: auto;
  z-index: 2;
`

class App extends Component {

  incrementslideIndex = () => {  
    let oldSlideIndex = getPathInt(this.props.location.pathname);
    this.storeLastLocation(oldSlideIndex)
    if (oldSlideIndex < 3) {
      let newPathSlideNumber = oldSlideIndex + 1;
      this.props.history.push(`/${newPathSlideNumber}`)
    }
  }

  decrementslideIndex = () => {
    let oldSlideIndex = getPathInt(this.props.location.pathname);
    this.storeLastLocation(oldSlideIndex)

    if (oldSlideIndex > 1) {
      let newPathSlideNumber = oldSlideIndex - 1;
      this.props.history.push(`/${newPathSlideNumber}`)
    }
  }

  storeLastLocation = (index) => {
    window.lastLocation = index;
  }

  isRightAnimation = () => {
    let currentPathname = this.props.location.pathname
    return window.lastLocation && (window.lastLocation < getPathInt(currentPathname))
  }

  render() {
    let right = this.isRightAnimation();
    let pathInt = getPathInt(this.props.location.pathname);

    return (
      <div className="App">
        <Route exact path="/" render={() => (<Redirect to="/1"/>)}/>
        <Swipeable onSwipeLeft={this.incrementslideIndex} onSwipeRight={this.decrementslideIndex}>
        <ContainerDiv>
          <ArrowHolder>
            {pathInt === 1? <div/> : <LeftArrow onClick={this.decrementslideIndex} src={arrowImage}></LeftArrow>}
            {pathInt === 3? <div/> : <RightArrow onClick = {this.incrementslideIndex} src={arrowImage}></RightArrow>}
          </ArrowHolder>
          <MainDiv>
            <SlideContainer>
              <TransitionGroup
                childFactory={childFactoryCreator(right? "example": "exampletwo")}>
                <CSSTransition
                key={this.props.location.key}
                classNames={right? "example": "exampletwo"}
                timeout={250}>
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
        </Swipeable>
        </div>
    );
  }
}

export default withRouter(App);
