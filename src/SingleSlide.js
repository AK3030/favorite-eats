import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TitleText = styled.div`
  font-family: roboto;
  font-size: 35px;
  background-color: rgba(0,0,0,.3);
  color: white;
  padding: 5px;
  width: 100%;
`

class SingleSlide extends Component {

  render() {
    return (
        <Container>
            <TopDiv>
                <FoodBackgroundDiv image={this.props.imageSource}>
                <TitleText>
                    {this.props.titleText}
                </TitleText>
                </FoodBackgroundDiv>
            </TopDiv>
            <BottomDiv>
                <FoodLogo src={this.props.logoSource}/>
            </BottomDiv>
        </Container>
    );
  }
}


export default SingleSlide;