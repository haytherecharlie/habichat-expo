import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const ReplyWrapper = styled(View)({
  borderBottomWidth: 1,
  borderBottomColor: `#CCC`,
  padding: `10px 20px`,
});

const ThreadReply = ({ reply }) => {
  return (
    <ReplyWrapper>
      <Text style={{ fontWeight: `700` }}>{reply.author}</Text>
      <Text>{reply.text}</Text>
    </ReplyWrapper>
  );
};

export default ThreadReply;
