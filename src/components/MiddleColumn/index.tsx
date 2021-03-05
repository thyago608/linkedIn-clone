import React, { useContext } from "react";
import FeedShare from "./FeedShare";
import FeedPost from "./FeedPost";
import LoadingFeedPost from "../Shimmer/LoadingFeedPost";
import LoadingFeedShare from "../Shimmer/LoadingFeedShare";
import { LoadingContext } from "../../context/LoadingContext";
import { Container } from "./styles";

const MiddleColumn: React.FC = () => {
  const { isLoading } = useContext(LoadingContext);
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingFeedShare />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
        </>
      ) : (
        <>
          <FeedShare />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
        </>
      )}
    </Container>
  );
};

export default MiddleColumn;
