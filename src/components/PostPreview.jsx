import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const PostWrapper = styled(TouchableOpacity)({
  width: `100%`,
  display: `flex`,
  flexDirection: "row",
  justifyContent: "stretch",
  background: `rgba(255,255,255,0.3)`,
  padding: `20px 10px`,
  borderBottomWidth: 1,
  borderBottomColor: `#CCC`,
});

const AvatarWrapper = styled(View)({
  background: "red",
  flex: `0 0 35px`,
  height: 35,
  marginRight: 10,
  borderRadius: 17.5,
});

const TextWrapper = styled(View)({
  flex: 1,
  display: `flex`,
});

const PostPreview = ({ changeThread, index, post }) => {
  const selectPost = () => {
    return changeThread(index);
  };

  return (
    <PostWrapper key={`post${index}`} onPress={selectPost}>
      <AvatarWrapper />
      <TextWrapper>
        <Text style={{ fontFamily: 'bold' }}>{post.author}</Text>
        <Text style={{ fontFamily: 'regular' }}>{post.text}</Text>
      </TextWrapper>
    </PostWrapper>
  );
};

export default PostPreview;
