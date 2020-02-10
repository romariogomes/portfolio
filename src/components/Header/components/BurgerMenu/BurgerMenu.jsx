import React from "react";
import { menuItems } from "content";
import { Container, Item, ItemLink, MenuList, MenuItem } from "./styles";

const MenuContent = () =>
  menuItems.map(item => (
    <MenuItem>
      <Item>
        <ItemLink href={`#${item.toLowerCase()}`}>{item}</ItemLink>
      </Item>
    </MenuItem>
  ));
export const BurgerMenu = ({ visible }) => {
  return (
    <Container visible={visible}>
      <MenuList>
        <MenuContent />
      </MenuList>
    </Container>
  );
};
