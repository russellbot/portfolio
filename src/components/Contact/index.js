import React from "react";
import Fade from 'react-reveal/Fade';
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  LinkLabel,
  LinkContact,
  FormButton,
  Text,
} from "./ContactElements";

import { ButtonA } from "../../components/ButtonElement";

const Contact = () => {
  return (
    <>
      <Container>
      <Fade down>
        <FormWrap>
          <FormContent>
            <Form>
              <FormH1>Contact Me</FormH1>
              <ButtonA
                href="mailto:russellbot@gmail.com"
                target="_blank"
                aria-label="Email"
                primary="true"
                dark="true"
              >
                russellbot@gmail.com
              </ButtonA>
              <ButtonA
                href="//github.com/russellbot"
                target="_blank"
                aria-label="Email"
                primary="true"
                dark="true"
              >
                Github
              </ButtonA>
              <ButtonA
                href="//linkedin.com/in/russell-hart-31aa9012b/"
                target="_blank"
                aria-label="Email"
                primary="true"
                dark="true"
              >
                LinkedIn
              </ButtonA>
            </Form>
          </FormContent>
        </FormWrap>
        </Fade>
      </Container>
    </>
  );
};

export default Contact;
