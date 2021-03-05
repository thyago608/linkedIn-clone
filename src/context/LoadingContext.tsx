import React, { createContext, useState, ReactNode } from "react";

//Definição das propriedades do contexto
interface LoadingContextProps {
  isLoading: boolean;
  setIsLoading: () => void;
}

//Criaçã do Contexto
export const LoadingContext = createContext({} as LoadingContextProps);

//Definição das propriedades do Loading Provider
interface LoadingProviderProps {
  children: ReactNode;
}

//Provider
export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setLoading] = useState(true);

  //Função que executa a função que altera o estado da variável de contexto
  function setIsLoading() {
    setLoading(false);
  }

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}
