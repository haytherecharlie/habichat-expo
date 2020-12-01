import React from "react";
import { FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import InfoCard from "../components/InfoCard";
import styled from "styled-components/native";

const CardWrapper = styled(TouchableOpacity)({
  padding: 20,
  borderBottomWidth: 1,
  borderBottomColor: `#F5F5F5`
});

const PostsList = ({ posts, changeThread }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={({ item, index }) => (
          <CardWrapper onPress={() => changeThread(index)}>
            <InfoCard
              title={item.author}
              subtitle={item.text}
              index={index}
              handlePress={changeThread}
            />
          </CardWrapper>
        )}
      />
    </SafeAreaView>
  );
};

export default PostsList;
