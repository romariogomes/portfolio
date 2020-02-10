import styled from "styled-components";

export const HeaderComponent = styled.header`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.defaultBlue};
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

export const Logo = styled.div`
  margin: auto 30px;
  font-size: ${({ theme }) => theme.fontSizes.logo};
  font-family: ${({ theme }) => theme.fonts.raleway};
  color: ${({ theme }) => theme.colors.defaultBlue};

  @media screen and (max-width: 805px) {
    margin: auto;
  }
`;

export const MenuList = styled.div`
  display: flex;

  @media screen and (max-width: 805px) {
    position: absolute;
    top: 30px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: inline-flex;
  padding: 0;

  @media screen and (max-width: 805px) {
    display: none;
  }
`;

export const ItemList = styled.li`
  display: table;
  height: 100%;
  margin: auto 30px;
`;

export const ItemMenu = styled.div`
  display: table-cell;
  vertical-align: middle;
  font-size: ${({ theme }) => theme.fontSizes.menu};
  color: ${({ theme }) => theme.colors.textColor};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
