import React from "react";
import { ShortBio } from "./components/ShortBio";
import { MenuOptions } from "./components/MenuOptions";
import { Container } from "./styles";

const Menu = () => {
  return (
    <Container>
      <ShortBio />
      <MenuOptions />
    </Container>
  );
};

export { Menu };
