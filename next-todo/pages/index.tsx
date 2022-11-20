import { NextPage } from "next";
import React from "react";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

const todos: TodoType[] = [
  { id: 1, text: "todo1", color: "gray", checked: true },
  { id: 2, text: "todo2", color: "gray", checked: false },
  { id: 3, text: "todo3", color: "gray", checked: false },
];

const app: NextPage = () => {
  return <TodoList todos={todos} />;
};

export default app;
