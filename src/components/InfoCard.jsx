import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const PostWrapper = styled(TouchableOpacity)({
  width: `100%`,
  display: `flex`,
  flexDirection: "row",
  alignItems: 'center',
  justifyContent: "stretch",
  background: `rgba(255,255,255,0.3)`,
  padding: `25px 25px 25px 25px`,
  borderBottomWidth: 1,
  borderBottomColor: `#F5F5F5`,
});

const AvatarWrapper = styled(View)({
  background: "indigo",
  flex: `0 0 35px`,
  height: 35,
  marginRight: 10,
  borderRadius: 10,
});

const TextWrapper = styled(View)({
  flex: 1,
  display: `flex`,
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center'
});

const InfoCard = ({ handlePress, index = 0, title = "", subtitle = "" }) => {
  return (
    <PostWrapper key={`post${index}`} onPress={() => handlePress(index)}>
      <AvatarWrapper />
      <TextWrapper>
        <Text style={{ color: `#444`, fontFamily: 'medium', fontSize: 14, marginBottom: 3 }}>{title}</Text>
        <Text style={{ color: `#888`, fontFamily: 'regular', fontSize: 12 }}>{subtitle}</Text>
      </TextWrapper>
    </PostWrapper>
  );
};

export default InfoCard;
