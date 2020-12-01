import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import styled from "styled-components/native";

const ComposeReplyWrapper = styled(View)({
  margin: `20px 0`,
  background: `#fff`,
  display: "flex",
  flexDirection: "row",
});

const ComposeInput = styled(TextInput)({
  display: "flex",
  flex: `1 1 100px`,
  padding: 10
});

const ComposeReply = ({ activeThread, posts, setPosts }) => {
  const [textValue, setTextValue] = useState("");

  const addReply = () => {
    const newArray = [...posts];
    newArray[activeThread].replies.unshift({
      author: "Charlie Hay",
      text: textValue,
    });
    setPosts(newArray);
    setTextValue("");
  };

  return (
    <ComposeReplyWrapper>
      <ComposeInput
        placeholder="Start typing to reply..."
        style={{ background: "#FFF" }}
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <Button title="Submit" onPress={addReply} />
    </ComposeReplyWrapper>
  );
};

export default ComposeReply;
