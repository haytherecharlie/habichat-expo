import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const PostWrapper = styled(View)({
  width: `100%`,
  display: `flex`,
  flexDirection: "row",
  alignItems: 'center',
  justifyContent: "stretch",
});

const AvatarWrapper = styled(View)({
  background: "indigo",
  flex: `0 0 35px`,
  height: 35,
  marginRight: 10,
  borderRadius: 17.5,
});

const TextWrapper = styled(View)({
  flex: 1,
  display: `flex`,
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center'
});

const InfoCard = ({ index = 0, title = "", subtitle = "" }) => {
  return (
    <PostWrapper>
      <AvatarWrapper />
      <TextWrapper>
        <Text style={{ color: `#444`, fontFamily: 'medium', fontSize: 14, marginBottom: 3 }}>{title}</Text>
        <Text style={{ color: `#888`, fontFamily: 'regular', fontSize: 12 }}>{subtitle}</Text>
      </TextWrapper>
    </PostWrapper>
  );
};

export default InfoCard;
