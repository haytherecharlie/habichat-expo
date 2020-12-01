import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import PostPreview from "../components/PostPreview";
import styled from "styled-components/native";

const Wrapper = styled(SafeAreaView)({
  flex: 1,
});

const PostsList = ({ posts, changeThread }) => {
  return (
    <Wrapper>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={(post) => (
          <PostPreview
            post={post.item}
            index={post.index}
            changeThread={changeThread}
          />
        )}
      />
    </Wrapper>
  );
};

export default PostsList;
