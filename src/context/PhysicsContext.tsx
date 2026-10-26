import React, { createContext, useContext, useState, useEffect } from 'react';

interface PhysicsContextType {
  isZeroG: boolean;
  togglePhysics: () => void;
  setZeroG: (val: boolean) => void;
}

const PhysicsContext = createContext<PhysicsContextType>({
  isZeroG: true,
  togglePhysics: () => {},
  setZeroG: () => {},
});

export const PhysicsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isZeroG, setIsZeroG] = useState<boolean>(true);

  // Toggle function
  const togglePhysics = () => {
    setIsZeroG((prev) => !prev);
  };

  const setZeroG = (val: boolean) => {
    setIsZeroG(val);
  };

  return (
    <PhysicsContext.Provider value={{ isZeroG, togglePhysics, setZeroG }}>
      {children}
    </PhysicsContext.Provider>
  );
};

export const usePhysics = () => useContext(PhysicsContext);
