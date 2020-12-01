import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const Container = styled(View)((P) => ({
  flex: P.splitScreen ? 2 : 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "stretch",
  background: "purple",
}));

const Thread = ({ children, splitScreen, active }) => {
  return !splitScreen && !active ? null : (
    <Container splitScreen={splitScreen}>{children}</Container>
  );
};

export default Thread;
