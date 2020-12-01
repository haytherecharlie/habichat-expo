import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const PostWrapper = styled(TouchableOpacity)({
  width: `100%`,
  display: `flex`,
  flexDirection: "row",
  justifyContent: "stretch",
  background: `rgba(255,255,255,0.3)`,
  padding: `25px 25px 25px 25px`,
  borderBottomWidth: 1,
  borderBottomColor: `#F8F8F8`,
});

const AvatarWrapper = styled(View)({
  background: "indigo",
  flex: `0 0 50px`,
  height: 50,
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
        <Text style={{ color: `#444`, fontFamily: 'medium', fontSize: 14, marginBottom: 3 }}>{post.author}</Text>
        <Text style={{ color: `#888`, fontFamily: 'regular', fontSize: 12 }}>{post.text}</Text>
      </TextWrapper>
    </PostWrapper>
  );
};

export default PostPreview;
