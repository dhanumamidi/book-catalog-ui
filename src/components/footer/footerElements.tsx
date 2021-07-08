import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.gif";

export const FooterContainer = styled.div`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    padding: 10px;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  margin-bottom: 12px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const FooterLogo = styled(Link)`
  background-image: url(${logo});
  height: 200px;
  width: 200px;
`;

export const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  justify-content: center;
`;

export const Name = styled.h1`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Mail = styled.a`
  margin-bottom: 12px;
  text-decoration: none;
  cursor: pointer;
  color: #fff;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const Phone = styled.p`
  margin-bottom: 12px;
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const SocialMediaLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  margin: 0 8px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;
