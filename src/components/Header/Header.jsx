import React from "react";
import { useBurgerMenu } from "hooks/useBurgerMenu";
import { BurgerMenu, BurgerMenuIcon } from "./components";
import { menuItems } from "content";

import {
  HeaderComponent,
  ItemList,
  ItemMenu,
  Logo,
  MenuList,
  List
} from "./styles";

export const Header = () => {
  const { handleClick, displayMenu } = useBurgerMenu();
  return (
    <>
      <HeaderComponent>
        <Logo>ROMARIO GOMES</Logo>
        <MenuList>
          <List>
            {menuItems.map(item => (
              <ItemList key={item.toLowerCase()} id={`#${item.toLowerCase()}`}>
                <ItemMenu>{item}</ItemMenu>
              </ItemList>
            ))}
          </List>
          <BurgerMenuIcon onClick={handleClick} />
        </MenuList>
      </HeaderComponent>
      <BurgerMenu visible={displayMenu} />
    </>
  );
};
