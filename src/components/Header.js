import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <a href="#/">
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => {
            return (
              <a key={index} href="#/">
                {car}
              </a>
            );
          })}
      </Menu>
      <RightMenu>
        <a href="#/">Shop</a>
        <a href="#/">Account</a>
        <FontAwesomeIcon
          className="pointer"
          icon="bars"
          onClick={() => setBurgerStatus(true)}
        />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <FontAwesomeIcon
            icon="times"
            onClick={() => setBurgerStatus(false)}
          />
        </CloseWrapper>
        <li>
          <a href="#/">Existing Inventory</a>
        </li>
        <li>
          <a href="#/">Used Inventory</a>
        </li>
        <li>
          <a href="#/">Trade-In</a>
        </li>
        <li>
          <a href="#/">Test Drive</a>
        </li>
        <li>
          <a href="#/">Cybertruck</a>
        </li>
        <li>
          <a href="#/">Roadster</a>
        </li>
        <li>
          <a href="#/">Semi</a>
        </li>
        <li>
          <a href="#/">Charging</a>
        </li>
        <li>
          <a href="#/">Powerwall</a>
        </li>
        <li>
          <a href="#/">Commercial Energy</a>
        </li>
        <li>
          <a href="#/">Utilities</a>
        </li>
        <li>
          <a href="#/">Find Us</a>
        </li>
        <li>
          <a href="#/">Support</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 25px;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  background-color: white;
  z-index: 1000;
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 20px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 0;
    a {
      font-weight: semi-bold;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;