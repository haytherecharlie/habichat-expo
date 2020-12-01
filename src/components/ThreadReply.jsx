import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const ReplyWrapper = styled(View)({
  margin: `0 20px`,
  borderBottomWidth: 1,
  borderBottomColor: `#CCC`,
  padding: `10px 20px`,
});

const ThreadReply = ({ reply }) => {
  return (
    <ReplyWrapper>
      <Text style={{ fontFamily: 'bold' }}>{reply.author}</Text>
      <Text style={{ fontFamily: 'regular' }}>{reply.text}</Text>
    </ReplyWrapper>
  );
};

export default ThreadReply;
