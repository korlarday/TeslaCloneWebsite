import React from "react";
import styled from "styled-components";
import Section from "./section";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        backgroundImg="model-s.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        backgroundImg="model-y.jpg"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        backgroundImg="model-3.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        backgroundImg="model-x.jpg"
      />
      <Section
        title="Lowest Cost Solar panels in America"
        description="Money-back guarantee"
        leftBtnText="Order now"
        rightBtnText="Learn more"
        backgroundImg="solar-panel.jpg"
      />
      <Section
        title="Accessories"
        description=""
        leftBtnText="Shop now"
        rightBtnText=""
        backgroundImg="accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
