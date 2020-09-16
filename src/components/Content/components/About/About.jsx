import React from "react";
import { Professional } from "../Professional";
import {
  Button,
  Container,
  ContainerInfo,
  ContainerPhoto,
  Photo,
  Text,
  Title,
  JobTitle,
} from "./styles";

const About = () => (
  <Container>
    <ContainerInfo>
      <Title>Romario Gomes</Title>
      <JobTitle>Software Engineer</JobTitle>
      <Text>
        A resilient software engineer that can work both frontend and backend.
        Self-taught, moved by challenges and passionate to learn new
        technologies.
      </Text>
      <Button>View Resume</Button>
    </ContainerInfo>
    <ContainerPhoto>
      <Photo />
    </ContainerPhoto>
  </Container>
);

export { About };
