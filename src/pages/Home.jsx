import React, { useState } from "react";
import ComposeReply from "../components/ComposeReply";
import PostComplete from "../components/PostComplete";
import PostHeader from "../components/PostHeader";
import PostsList from "../entities/PostsList";
import ThreadHeader from "../components/ThreadHeader";
import ThreadReply from "../components/ThreadReply";
import useDimensions from "../hooks/useDimensions";
import Page from "../layouts/Page";
import Posts from "../layouts/Posts";
import Thread from "../layouts/Thread";
import mockPosts from "../mocks/posts";
import { POSTS, THREAD } from "../constants";

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
        <PostsList posts={posts} changeThread={changeThread} />
      </Posts>

      {/* THREAD */}
      <Thread splitScreen={splitScreen} active={activePane === THREAD}>
        <ThreadHeader
          showBack={activePane === THREAD && !splitScreen}
          setActivePane={setActivePane}
        />
        <PostComplete post={posts[activeThread]} />
        {posts[activeThread].replies.map((reply, index) => (
          <ThreadReply key={`reply-${index}`} reply={reply} />
        ))}
        <ComposeReply
          activeThread={activeThread}
          posts={posts}
          setPosts={setPosts}
        />
      </Thread>
    </Page>
  );
};

export default Home;
