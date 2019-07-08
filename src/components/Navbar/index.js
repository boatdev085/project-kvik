import React from "react";
import styled from "styled-components";
const Navbar = () => {
  return (
    <Container>
      <BoxIconAndShowName>
        <IconKvik>Kvik</IconKvik>
        <ShowName>xxx - 7 good reasons to choose kvik TH EN</ShowName>
      </BoxIconAndShowName>
      <HrLine />
      <BoxIconAndShowName>
        <BoxMenu>
          <span>Kitchen</span> <span>Database</span> <span>Print From</span>
        </BoxMenu>
        <BoxStore>Stores</BoxStore>
      </BoxIconAndShowName>
    </Container>
  );
};
export default Navbar;
const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: black;
  color: white;
`;
const BoxIconAndShowName = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
`;
const IconKvik = styled.div`
  flex: 2;
`;
const ShowName = styled.div`
  flex: 5;
  text-align: right;
`;
const HrLine = styled.hr`
  margin: 0 2rem;
`;
const BoxMenu = styled.div`
  flex: 5;
`;
const BoxStore = styled.div`
  flex: 2;
  text-align: right;
`;
