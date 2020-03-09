import React from "react";
import { Photo } from "../Photo";
import { Logo } from "../Logo";
import { SocialMedia } from "../SocialMedia";
import { Container, Text } from "./styles";

const ShortBio = () => {
  return (
    <Container>
      <Logo />
      <Photo />
      <Text>
        My name is Romario Gomes and I'm a Software Engineer. Welcome to my
        professional website.
      </Text>
      <SocialMedia />
    </Container>
  );
};

export { ShortBio };
