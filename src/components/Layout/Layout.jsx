import React from "react";
import { Menu } from "components/Menu";
import { Content } from "components/Content";
import { Container } from "./styles";

const Layout = () => {
  return (
    <Container>
      <Menu />
      <Content />
    </Container>
  );
};

export { Layout };
