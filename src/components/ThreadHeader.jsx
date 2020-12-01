import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { POSTS } from "../constants";

const HeaderContainer = styled(View)({
  width: `100%`,
  background: `#FFF`,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: `22px 30px`
});

const Title = styled(Text)({
  fontFamily: "medium",
  fontSize: 15,
});

const ThreadHeader = ({ showBack, setActivePane }) => {
  return (
    <HeaderContainer>
      {showBack && (
        <TouchableOpacity onPress={() => setActivePane(POSTS)}>
          <Title>{`‹ Back to Posts`}</Title>
        </TouchableOpacity>
      )}
    </HeaderContainer>
  );
};

export default ThreadHeader;
