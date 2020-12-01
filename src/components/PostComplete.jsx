import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import InfoCard from "./InfoCard";

const PostContainer = styled(View)({
  display: `flex`,
  flexDirection: "column",
  justifyContent: "stretch",
});

const InfoWrapper = styled(View)({
  margin: `20px 20px 0px 20px`,
});

const ContentWrapper = styled(View)({
  padding: `10px 10px`,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: `20px`,
  borderBottomWidth: 1,
  borderBottomColor: `#F8F8F8`,
  boxShadow: `0 2px 5px rgba(0,0,0,0.1)`,
});

const PostText = styled(Text)({
  fontFamily: "regular",
  fontSize: 25,
  color: `#444`,
});

const PostBody = ({ post }) => {
  return (
    <PostContainer>
      <InfoWrapper>
        <InfoCard
          title={post.author}
          subtitle="12 December 2020"
          index="header"
          handlePress={() => {}}
        />
      </InfoWrapper>
      <ContentWrapper>
        <PostText>{post.text}</PostText>
      </ContentWrapper>
    </PostContainer>
  );
};

export default PostBody;
