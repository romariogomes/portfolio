import React from "react";
import { useData } from "hooks/useData";
import { Container, Item, ItemLink, MenuList, MenuItem } from "./styles";

const MenuContent = () => {
  const { menuItems } = useData();

  return menuItems.map(item => (
    <MenuItem>
      <Item>
        <ItemLink href={`#${item.toLowerCase()}`}>{item}</ItemLink>
      </Item>
    </MenuItem>
  ));
};

export const BurgerMenu = ({ visible }) => {
  return (
    <Container visible={visible}>
      <MenuList>
        <MenuContent />
      </MenuList>
    </Container>
  );
};
