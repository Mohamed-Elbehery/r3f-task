import { createContext, useContext, useState } from "react";

export const PointContext = createContext<any>({});

export const PointContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activePoint, setActivePoint] = useState({});
  const [toggleInfo, setToggleInfo] = useState(false);
  const [activeMap, setActiveMap] = useState(1);

  return (
    <PointContext.Provider
      value={{
        activePoint,
        setActivePoint,
        toggleInfo,
        setToggleInfo,
        activeMap,
        setActiveMap,
      }}
    >
      {children}
    </PointContext.Provider>
  );
};

export function usePointContext() {
  const context = useContext(PointContext);

  if (context === undefined) {
    throw new Error(
      "usePoint Context must be used within a PointContextProvider"
    );
  }

  return context;
}
