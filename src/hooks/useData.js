import { content } from "content";

const useData = () => {
  const { menuItems, pageContent } = content;

  return { menuItems, pageContent };
};

export { useData };
