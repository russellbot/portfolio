import React from "react";
import Fade from "react-reveal/Fade";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <Fade right>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">rh</SocialLogo>
              <WebsiteRights>
                Russell Hart © {new Date().getFullYear()}
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="mailto:russellbot@gmail.com"
                  target="_blank"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </SocialIconLink>
                <SocialIconLink
                  href="//linkedin.com/in/russell-hart-31aa9012b/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="//github.com/russellbot"
                  target="_blank"
                  aria-label="Github"
                >
                  <FaGithub />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </Fade>
    </FooterContainer>
  );
};

export default Footer;
