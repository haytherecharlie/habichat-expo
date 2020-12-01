import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const HeaderContainer = styled(View)({
  height: 100,
  width: `100%`,
  background: `#F8F8F8`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: 30
});

const Title = styled(Text)({
  fontFamily: "regular",
  fontSize: 35,
});

const ThreadHeader = () => {
  return (
    <HeaderContainer>
      <Title>Thread</Title>
    </HeaderContainer>
  );
};

export default ThreadHeader;
