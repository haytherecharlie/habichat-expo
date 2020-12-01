import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const Container = styled(View)({
  flex: 1,
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
  justifyContent: "center",
  background: "#FFF",
});

const Wrapper = styled(View)({
  flex: 1,
  display: "flex",
  flexDirection: "row",
  width: `100%`,
  maxWidth: 1200,
  background: "#FFF",
});

const Page = ({ children }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default Page;
