import React from "react";
import {
  Button,
  Container,
  ContainerInfo,
  ContainerPhoto,
  Photo,
  Text,
  Title,
  JobTitle
} from "./styles";

const About = () => (
  <Container>
    <ContainerInfo>
      <Title>DFASFS SAFDSAFSA</Title>
      <JobTitle>Software Engineer</JobTitle>
      <Text>
        lorem fiohau dsaiof oidsja foj dsaodija oif oas ifdj ofd jisa fj oiasd
        jfd ofadjfdsa oisf jfio sdfa jofdoijsdjfsdo ias jdfsao dfjosd oijsdfoi
        sdoasfdi
      </Text>
      <Button>View Resume</Button>
    </ContainerInfo>
    <ContainerPhoto>
      <Photo />
    </ContainerPhoto>
  </Container>
);

export { About };
