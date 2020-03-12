import React from "react";
import { Container, Title } from "./styles";

const SectionTitle = props => (
  <Container>
    <Title>{props.children}</Title>
  </Container>
);

export { SectionTitle };
