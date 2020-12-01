import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import InfoCard from "./InfoCard";

const PostContainer = styled(View)({
  display: `flex`,
  flexDirection: "column",
  justifyContent: "stretch",
});

const ContentWrapper = styled(View)({
  padding: `10px 10px`,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  margin: `20px 20px 0px 15px`,
});

const PostText = styled(Text)({
  fontFamily: 'regular',
  fontSize: 25,
  color: `#444`
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
      <ContentWrapper>
        <PostText>{post.text}</PostText>
      </ContentWrapper>
    </PostContainer>
  );
};

export default PostBody;
