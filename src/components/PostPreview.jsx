import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const PostWrapper = styled(TouchableOpacity)({
  width: `100%`,
  display: `flex`,
  flexDirection: "row",
  justifyContent: "stretch",
  background: `rgba(255,255,255,0.3)`,
  padding: `20px 25px`,
  borderBottomWidth: 1,
  borderBottomColor: `#CCC`,
});

const AvatarWrapper = styled(View)({
  background: "indigo",
  flex: `0 0 40px`,
  height: 40,
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

const PostPreview = ({ changeThread, index, post }) => {
  const selectPost = () => {
    return changeThread(index);
  };

  return (
    <PostWrapper key={`post${index}`} onPress={selectPost}>
      <AvatarWrapper />
      <TextWrapper>
        <Text style={{ fontFamily: 'medium', fontSize: 14, marginBottom: 3 }}>{post.author}</Text>
        <Text style={{ fontFamily: 'regular', fontSize: 12 }}>{post.text}</Text>
      </TextWrapper>
    </PostWrapper>
  );
};

export default PostPreview;
