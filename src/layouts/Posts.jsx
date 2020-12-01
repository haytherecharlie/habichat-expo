import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const Container = styled(View)((P) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "stretch",
  background: "indigo",
}));

const Posts = ({ children, splitScreen, active }) => {
  return !splitScreen && !active ? null : (
    <Container splitScreen={splitScreen}>{children}</Container>
  );
};

export default Posts;
