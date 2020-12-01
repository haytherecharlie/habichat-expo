import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import InfoCard from "../components/InfoCard";
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
        renderItem={({item, index}) => (
          <InfoCard
            title={item.author}
            subtitle={item.text}
            index={index}
            handlePress={changeThread}
          />
        )}
      />
    </Wrapper>
  );
};

export default PostsList;
