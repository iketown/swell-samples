import React, { createContext, useContext } from "react";

const ContentCtx = createContext<Partial<ContentCtx>>({});

export const ContentCtxProvider: React.FC<{ allProps: any }> = ({
  children,
  allProps,
}) => {
  return <ContentCtx.Provider value={allProps} {...{ children }} />;
};

export const useContentCtx = () => useContext(ContentCtx);
