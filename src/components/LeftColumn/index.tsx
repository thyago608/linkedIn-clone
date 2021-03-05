import React, { useContext, useEffect } from "react";
import ProfilePanel from "./ProfilePanel";
import HashtagPanel from "./HashtagPanel";
import LoadingProfilePanel from "../Shimmer/LoadingProfilePanel";
import { LoadingContext } from "../../context/LoadingContext";
import { Container } from "./styles";

const LeftColumn: React.FC = () => {
  const { isLoading } = useContext(LoadingContext);

  return (
    <Container className="left-column">
      {isLoading ? (
        <LoadingProfilePanel />
      ) : (
        <>
          <ProfilePanel />
          <HashtagPanel />
        </>
      )}
    </Container>
  );
};

export default LeftColumn;
