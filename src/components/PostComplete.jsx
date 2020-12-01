import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import InfoCard from "./InfoCard";

const PostContainer = styled(View)({
  flex: `0 0 auto`,
  display: `flex`,
  flexDirection: "column",
  justifyContent: "stretch",
  borderBottomWidth: 1,
  borderBottomColor: `#CCC`,
});

const PostBody = ({ post }) => {
  return (
    <PostContainer>
      <InfoCard
        title={post.author}
        subtitle="12 December 2020"
        index="header"
        handlePress={() => {}}
      />
    </PostContainer>
  );
};

export default PostBody;
