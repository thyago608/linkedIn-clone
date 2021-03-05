import React from "react";
import Layout from "./components/Layout";
import { LoadingProvider } from "./context/LoadingContext";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <LoadingProvider>
        <Layout />
      </LoadingProvider>
    </>
  );
}

export default App;
