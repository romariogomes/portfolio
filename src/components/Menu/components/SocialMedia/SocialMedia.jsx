import React from "react";
import { Facebook, Github, Instagram, Linkedin } from "components/Icons";
import { Container, List, ListItem, SocialMediaIcon, Link } from "./styles";

const SocialMedia = () => {
  const socialMediaList = [
    {
      url: "http://facebook.com",
      component: <Facebook />
    },
    {
      url: "https://github.com",
      component: <Github />
    },
    {
      url: "https://instagram.com",
      component: <Instagram />
    },
    {
      url: "https://linkedin.com",
      component: <Linkedin />
    }
  ];

  return (
    <Container>
      <List>
        {socialMediaList.map(item => (
          <ListItem>
            <SocialMediaIcon>
              <Link href={item.url} target="blank">
                {item.component}
              </Link>
            </SocialMediaIcon>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export { SocialMedia };
