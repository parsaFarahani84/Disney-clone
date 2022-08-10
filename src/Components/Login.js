import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/cta-logo-one.svg" />
        <Signup>GET ALL THERE</Signup>
        <Description>
          Get Premier Access to Roya and the Last Dragon for an additional Free
          with a Desney+ subscription. As of 03/26/21, the price of Disney+ and
          the Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const CTALogoTwo = styled.img`
  width: 90%;
`;

const Description = styled.p`
  font-size: 13px;
  letter-spacing: 1.2px;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const Signup = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0px;
  text-align: center;
  border-radius: 4px;
  color: #f9f9f9;
  margin-top: 8px;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  transition: 250ms;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background: #0483ee;
  }
`;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url(/login-background.jpg);
    z-index: -1;
    opacity: 0.7;
  }
`;

const CTALogoOne = styled.img``;

const CTA = styled.div`
  margin-bottom: 100px;
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
