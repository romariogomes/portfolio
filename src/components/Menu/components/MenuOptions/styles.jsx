import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
`;

export const List = styled.ul`
  list-style: none;
  padding: 1rem;
`;

export const ListItem = styled.li``;

export const Item = styled.div`
  text-align: center;
  padding: 10px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const Separator = styled.div`
  border-top: 1px dotted rgba(0, 0, 0, 0.6);
`;
