import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinksContainer,
  FooterLogo,
  Mail,
  Name,
  PersonalInfo,
  Phone,
  SocialMedia,
  SocialMediaLink,
} from "./footerElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Made with</FooterLinkTitle>
                <FooterLink
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                >
                  HTML
                </FooterLink>
                <FooterLink
                  href="https://styled-components.com/"
                  target="_blank"
                >
                  Styled Component
                </FooterLink>
                <FooterLink href="https://reactjs.org/" target="_blank">
                  React
                </FooterLink>
              </FooterLinkItems>
            </FooterLinkWrapper>
          </FooterLinksContainer>
          <FooterLogo to="/"></FooterLogo>
          <PersonalInfo>
            <Name aria-label="Name">Dhanunjay Mamidi</Name>
            <Mail aria-label="Mail ID" href="mailto:thedhanumamidi@gmail.com">
              thedhanumamidi@gmail.com
            </Mail>
            <Phone aria-label="Phone number">+91 917 648 3426</Phone>
            <SocialMedia>
              <SocialMediaLink
                href="https://www.linkedin.com/in/dhanunjay-mamidi-9a00b3127/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialMediaLink>
              <SocialMediaLink
                href="https://github.com/dhanumamidi"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaGithub />
              </SocialMediaLink>
            </SocialMedia>
          </PersonalInfo>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
