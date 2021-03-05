import React, { useContext } from "react";
import TrendingPanel from "./TrendingPanel";
import LoadingTrendingPanel from "../Shimmer/LoadingTrendingPanel";
import { LoadingContext } from "../../context/LoadingContext";
import { Container } from "./styles";

const RightColumn: React.FC = () => {
  const { isLoading } = useContext(LoadingContext);

  return (
    <Container className="right-column">
      {isLoading ? (
        <LoadingTrendingPanel />
      ) : (
        <>
          <TrendingPanel />
          <TrendingPanel />
        </>
      )}
    </Container>
  );
};

export default RightColumn;
