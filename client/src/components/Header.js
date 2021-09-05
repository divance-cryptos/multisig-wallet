import React from "react";
import styled from "styled-components/macro";

const SubNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  font-size: 14px;
  background: #4b59f7;


  @media screen and (max-width: 960px) {
    height: 120px;
  }
`;

export const Display = styled.ul`
   align-items: center;
   justify-content: center;
`;


export const Item = styled.li`
  display: flex;
  justify-content: left;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  color: white;

  @media screen and (max-width: 960px) {
    font-size: 12px;
    height: 23px;;
  }
`;

export const Label = styled.p`
  font-weight: bold;
  padding-right: 5px;
`;

function Header({ approvers, quorum }) {
  return (
    <>
      <SubNav>
        <Display>
          <Item><Label>Approver 1 :</Label> {approvers[0]} </Item>
          <Item><Label>Approver 2 :</Label> {approvers[1]} </Item>
          <Item><Label>Approver 3 :</Label> {approvers[2]} </Item>
          <Item><Label>Quorum: </Label> {quorum} </Item>
        </Display>
      </SubNav>
    </>
  );
}
export default Header;
