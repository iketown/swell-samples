import { createContext, useContext } from "react";

const TemplateContext = createContext<{ templateSlug?: string }>({});

export const TemplateProvider: React.FC<{
  templateSlug?: { current: string };
}> = ({ children, templateSlug }) => {
  return (
    <TemplateContext.Provider
      value={{ templateSlug: templateSlug?.current }}
      {...{ children }}
    />
  );
};
export const useTemplate = () => useContext(TemplateContext);
