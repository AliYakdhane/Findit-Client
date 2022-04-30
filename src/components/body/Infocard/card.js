import React from "react";
import styled from "styled-components";
import { Marginer } from "./marginer";

import NikeImg from "../../../assets/nike-logo.png";

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 800;
`;

const SmallText = styled.span`
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  
  
  align-items: center;
`;

const BuyButton = styled.button`
  padding: 5px 59px;
  background-color: #fff;
  align-content: center;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
 
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  &:hover {
    background-color: transparent;
    color: #fff;
    border: 1px solid #fbbe01;
  }
`;



export function ShoesDetails(props) {
  return (
    <DetailsContainer>
      
      <SpacedHorizontalContainer>
        <MediumText>Discover our professional<br/> solution right now! </MediumText>
       
      </SpacedHorizontalContainer>
      <Marginer direction="vertical" margin="1.2em" />
      <SpacedHorizontalContainer>
        
        <BuyButton>GO!</BuyButton>
      </SpacedHorizontalContainer>
    </DetailsContainer>
  );
}