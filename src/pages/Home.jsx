import React, { useState } from "react";
import { Button, TextInput } from "react-native";
import ComposeReply from "../components/ComposeReply";
import PostComplete from "../components/PostComplete";
import PostHeader from "../components/PostHeader";
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
  const [posts, setPosts] = useState(mockPosts);

  const changeThread = (i) => {
    setActiveThread(i);
    return setActivePane(THREAD);
  };

  return (
    <Page>
      {/* POSTS */}
      <Posts splitScreen={splitScreen} active={activePane === POSTS}>
        <PostHeader />
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
        {activePane === THREAD && !splitScreen && (
          <Button title="Go Back" onPress={() => setActivePane(POSTS)} />
        )}
        <PostComplete
          key={`full-post-${activeThread}`}
          post={posts[activeThread]}
          changeThread={changeThread}
        />
        <ComposeReply
          activeThread={activeThread}
          posts={posts}
          setPosts={setPosts}
        />
        {posts[activeThread].replies.map((reply, index) => (
          <ThreadReply key={`reply-${index}`} reply={reply} />
        ))}
      </Thread>
    </Page>
  );
};

export default Home;
