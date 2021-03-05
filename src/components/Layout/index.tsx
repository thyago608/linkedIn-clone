import React, { useContext, useEffect } from "react";
import LeftColumn from "../LeftColumn";
import RightColumn from "../RightColumn";
import MiddleColumn from "../MiddleColumn";
import MobileHeader from "../MobileHeader";
import DesktopHeader from "../DesktopHeader";
import { Container } from "./styles";
import AdBanner from "../AdBanner";
import { LoadingContext } from "../../context/LoadingContext";

const Layout: React.FC = () => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 3000);
  }, []);

  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />

      <span>{!isLoading && <AdBanner />}</span>
      <main>
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </main>
    </Container>
  );
};

export default Layout;
