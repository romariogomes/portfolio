import { useState } from "react";

const useBurgerMenu = () => {
  const [displayMenu, setdisplayMenu] = useState(false);

  const handleClick = () => setdisplayMenu(!displayMenu);

  return { displayMenu, handleClick };
};

export { useBurgerMenu };
