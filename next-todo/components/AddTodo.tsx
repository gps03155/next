import React, { useState } from "react";
import styled from "styled-components";
import { addTodoAPI } from "../lib/api/todo";
import { useRouter } from "next/router";

const Container = styled.div`
  padding: 16px;
`;

const AddTodo: React.FC = () => {
  const [text, setText] = useState<string>("");

  const router = useRouter();

  const addTodo = async () => {
    try {
      if (!text) {
        alert("check input text");
      }

      await addTodoAPI({ text });
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <div>
        <h1>Add Todo</h1>
        <button type="button" onClick={addTodo}>
          add
        </button>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
        placeholder="please todo input"
      />
    </Container>
  );
};

export default AddTodo;
