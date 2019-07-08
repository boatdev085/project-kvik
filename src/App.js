import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import "./App.css";
import ImageBackaground from "./assets/img_bg.jpg";
const App = () => {
  return (
    <Container>
      <Navbar />
      <BoxImageBG>
        <img src={ImageBackaground} alt="bg" />
        <BoxCondition>
          <p>
            KVIK FANTASTIC MID YEAR OFFER <br />
            SPECIAL OFFER ONLY IN JUNE
          </p>
          <div>
            <span>
              Get special offer discount for Kvik kitchen 25% off only in June
              2019
            </span>
          </div>
          <ButtonCondition>Terms and Conditions</ButtonCondition>
        </BoxCondition>
        <BoxSale>
          <p>
            Jumping
            <br />
            June
          </p>
          <div>
            <h1>-25%</h1>
          </div>
          <div>only in June! ----</div>
        </BoxSale>
      </BoxImageBG>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  width: 100%;
`;
const BoxImageBG = styled.div`
  position: relative;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
  z-index: 1;
`;
const BoxCondition = styled.div`
  position: absolute;
  z-index: 2;
  background-color: white;
  bottom: 50px;
  left: 15px;
  padding: 2rem;
  p {
    color: black;
    font-weight: bold;
  }
  div > span {
    color: gray;
  }
`;
const ButtonCondition = styled.div`
  background-color: black;
  padding: 1rem;
  color: white;
  margin-top: 2rem;
  display: inline-block;
`;
const BoxSale = styled.div`
  position: absolute;
  right: 10px;
  bottom: 55px;
  background: pink;
  padding: 2rem;
`;

export default App;
