import React from "react";
import { useData } from "hooks/useData";
import { Container, Item, List, ListItem, Separator } from "./styles";

const MenuOptions = () => {
  const { menuItems } = useData();

  return (
    <Container>
      <Separator />
      <List>
        {menuItems.map(item => (
          <ListItem key={item.toLowerCase()} id={`#${item.toLowerCase()}`}>
            <Item>{item}</Item>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export { MenuOptions };
