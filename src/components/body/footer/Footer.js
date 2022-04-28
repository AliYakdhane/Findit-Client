import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div style={{backgroundColor:'#D3D0CB'}}>
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "20px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              
              <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                FIND IT
              </h1>
            </Link>
            <StyleP style={{fontSize:'16px'}} className="whiteColor ">
              © {getCurrentYear()} - <span style={{color:'#000'}} className="bold  font20">BOOSTER BC</span> All Right Reserved
            </StyleP>

            
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;