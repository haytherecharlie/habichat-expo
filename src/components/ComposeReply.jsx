import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import styled from "styled-components/native";

const ComposeReplyWrapper = styled(View)({
  margin: `20px`,
  display: "flex",
  flexDirection: "row",
  background: `#f8f8f8`,
  border: `1px solid #CCC`,
  borderRadius: 10
});

const ComposeInput = styled(TextInput)({
  display: "flex",
  flex: `1 1 30px`,
  padding: 10,
  background: `transparent`,
  fontFamily: "medium",
  color: `#888`
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
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        placeholderTextColor="#888"
      />
      <Button
        title="Submit"
        style={{ fontFamily: "medium" }}
        onPress={addReply}
      />
    </ComposeReplyWrapper>
  );
};

export default ComposeReply;
