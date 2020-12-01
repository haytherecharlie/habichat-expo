import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import PostPreview from "../components/PostPreview";
import ThreadReply from "../components/ThreadReply";
import useDimensions from "../hooks/useDimensions";
import Page from "../layouts/Page";
import Posts from "../layouts/Posts";
import Thread from "../layouts/Thread";
import mockPosts from "../mocks/posts";

const POSTS = "posts";
const THREAD = "thread";

const Home = () => {
  const splitScreen = useDimensions();
  const [activeThread, setActiveThread] = useState(0);
  const [activePane, setActivePane] = useState(POSTS);
  const [textValue, setTextValue] = useState("");
  const [posts, setPosts] = useState(mockPosts);

  const changeThread = (i) => {
    setActiveThread(i);
    return setActivePane(THREAD);
  };

  const addReply = () => {
    const newArray = [...posts];
    newArray[activeThread].replies.push({
      author: "Charlie Hay",
      text: textValue,
    });
    setPosts(newArray);
    setTextValue("");
  };

  return (
    <Page>
      {/* POSTS */}
      <Posts splitScreen={splitScreen} active={activePane === POSTS}>
        {posts.map((post, index) => (
          <PostPreview
            key={`post-${index}`}
            index={index}
            post={post}
            changeThread={changeThread}
          />
        ))}
      </Posts>

      {/* THREAD */}
      <Thread splitScreen={splitScreen} active={activePane === THREAD}>
        {posts[activeThread].replies.map((reply, index) => (
          <ThreadReply key={`reply-${index}`} reply={reply} />
        ))}
        <TextInput
          style={{ background: "#FFF" }}
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <Button title="Submit" onPress={addReply} />
        {activePane === THREAD && !splitScreen && (
          <Button title="Go Back" onPress={() => setActivePane(POSTS)} />
        )}
      </Thread>
    </Page>
  );
};

export default Home;
