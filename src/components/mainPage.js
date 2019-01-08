import React, { Component } from 'react';
import styled from 'styled-components';
import img from '../assets/boobs-clipart-icon-6.png'
import camera from '../assets/camera.svg';
import search from '../assets/searching-magnifying-glass.svg';


class MainPage extends Component {


    render() {
      const PageContainer = styled.div`
      width: 55%;
      display: flex;
      flex-direction: column;
      justify-content: center; 
      align-items: center;   
    `;
      const TopContainer = styled.div`
      flex-direction: column;
      justify-content: center;  
      `;
      const BrowserContainer = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      background-image: url(${img});
      background-size: cover;
      background-repeat: no-repeat;
      min-width: 630px;
      min-height: 285px;
      margin-right: 5s0px;     
      `;
        const BigText = styled.div`
      margin-top: 20px;
      font-size: 8rem;
      color: #535353;
      font-weight: bold;
   
       `;
      const InputContainer =  styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
       min-width: 500px;
      `;

      const InputGroup = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      width: 100%
      height: 40px;
      box-shadow: 0px 3px 25px -6px rgba(0,0,0,0.5);
      margin-top: 25px;
      `;

      const Input = styled.input`
      border: none;
      height: 20px;
      margin-right: 20px;
      min-width: 370px; 
      font-size: 19px
      &:focus{
      outline: none;
      }
      `;
      const SearchIcon = styled.div`
      height: 20px;
      width: 20px;
      background-image: url(${search});
      background-size: cover;
      background-repeat: no-repeat;
      border: none;
      margin-right: 20px;
      cursor: pointer;
      &:hover{
      opacity: 0.8
      }
      `;
        const CameraIcon = styled.div`
      margin-bottom: 5px;
      height: 20px;
      width: 20px;
      background-image: url(${camera});
      background-size: cover;
      background-repeat: no-repeat;
      margin-right: 25px;
      border: none;
      cursor: pointer;
       &:hover{
      opacity: 0.8
      }
      `;
      const TopText = styled.p`
      font-family: 'Lato', sans-serif;
      font-size: 16px;
      font-weight: 900;
      margin-bottom: 40px;
      margin-top: 40px;
       color: #535353;
      `;

      const MiddleText = styled.div`
      font-family: 'Lato', sans-serif;
      font-size: 26px;
      font-weight: 700;
      margin-bottom: 20px;
       color: #535353;
      `;

        return (
            <PageContainer>
                <TopContainer>
                    <TopText>AND WHAT WILL YOUR MAMA SAY</TopText>
                    <MiddleText>WHEN SHE SEES THE HISTORY OF</MiddleText>
                </TopContainer>
                <BrowserContainer>
                    <BigText>BRO</BigText>
                    <BigText>SER</BigText>
                </BrowserContainer>
                <InputContainer>
                    <InputGroup>
                        <Input value={'most important life questions'}/>
                        <CameraIcon/>
                        <SearchIcon/>
                    </InputGroup>
                    <InputGroup>
                        <Input value={'why do i have no friends'}/>
                        <CameraIcon/>
                        <SearchIcon/>
                    </InputGroup>
                    <InputGroup>
                        <Input value={'who is oleh vynnyk'}/>
                        <CameraIcon/>
                        <SearchIcon/>
                    </InputGroup>
                </InputContainer>
            </PageContainer>
        );
    }
}

export default MainPage;
