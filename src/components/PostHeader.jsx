import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const HeaderContainer = styled(View)({
  height: 50,
  width: `100%`,
  background: `#FFF`,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: 30,
});

const Title = styled(Text)({
  fontFamily: "medium",
  fontSize: 15,
});

const PostHeader = () => {
  return (
    <HeaderContainer>
      <Title>Latest Threads</Title>
    </HeaderContainer>
  );
};

export default PostHeader;
