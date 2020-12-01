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
  background: `#F8F8F8`
});

const BackButton = styled(TouchableOpacity)({
  padding: `10px 20px`
})

const Title = styled(Text)({
  fontFamily: "medium",
  fontSize: 18,
  color: `#444`
});

const ThreadHeader = ({ showBack, setActivePane }) => {
  return (
    <HeaderContainer>
      {showBack && (
        <BackButton onPress={() => setActivePane(POSTS)}>
          <Title>{`‹ Back to Posts`}</Title>
        </BackButton>
      )}
    </HeaderContainer>
  );
};

export default ThreadHeader;
