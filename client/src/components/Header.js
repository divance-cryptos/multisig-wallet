import React from "react";
import styled from "styled-components/macro";

const SubNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  font-size: 14px;
  background: #4b59f7;
  padding-left: 20%;
`;

export const Display = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: left;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;


export const Item = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

function Header({ approvers, quorum }) {
  return (
    <>
      <SubNav>
        <Display>
          <Item>Approvers: {approvers.join(", ")}</Item>
          <Item>Quorum: {quorum}</Item>
        </Display>
      </SubNav>
    </>
  );
}

export default Header;
