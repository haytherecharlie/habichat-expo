import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { POSTS } from "../constants";

const HeaderContainer = styled(View)({
  height: 50,
  width: `100%`,
  background: `#FFF`,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
});

const Third = styled(View)((P) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
}));

const Title = styled(Text)({
  fontFamily: "medium",
  fontSize: 15,
  margin: `10px 20px`
});

const ThreadHeader = ({ showBack, setActivePane }) => {
  return (
    <HeaderContainer>
      <Third style={{ alignItems: "flex-start" }}>
        {showBack && (
          <TouchableOpacity onPress={() => setActivePane(POSTS)}>
            <Title>{`‹ Back`}</Title>
          </TouchableOpacity>
        )}
      </Third>
      <Third style={{ alignItems: "center" }}>
        <Title>Thread</Title>
      </Third>
      <Third style={{ alignItems: "flex-end" }}></Third>
    </HeaderContainer>
  );
};

export default ThreadHeader;
