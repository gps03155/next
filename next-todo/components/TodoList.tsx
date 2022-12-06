import React, { useMemo, useCallback, useState } from "react";
import styled from "styled-components";
import palette from "../styles/palette";
import { ObjectIndexType, TodoType } from "../types/todo";
import { checkTodoAPI } from "../lib/api/todo";
import { useRouter } from "next/router";

const Container = styled.div`
  width: 100%;

  .todo-list-header {
    padding: 12px;
    border-bottom: 1px solid ${palette.gray};

    .todo-list-last-todo {
      font-size: 14px;
      span {
        margin-left: 8px;
      }
    }
  }

  .todo-list {
    .todo-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 52px;
      border-bottom: 1px sold ${palette.gray};

      .todo-left-side {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        .todo-color-block {
          width: 12px;
          height: 100%;
        }

        .checked-todo-text {
          color: ${palette.gray};
          text-decoration: line-through;
        }

        .todo-text {
          margin-left: 12px;
          font-size: 16px;
        }
      }

      .todo-right-side {
        display: flex;
        margin-right: 12px;

        .todo-button {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid ${palette.gray};
          background-color: transparent;
          outline: none;
        }
      }
    }
  }
`;

interface IProps {
  todos: TodoType[];
}

const TodoList: React.FC<IProps> = ({ todos }) => {
  const [localTodos, setLocalTodos] = useState(todos);

  const getTodoColorNums = useCallback(() => {
    const colors: ObjectIndexType = {};

    localTodos.forEach(({ color }) => {
      const value = colors[color];
      colors[color] = !value ? 1 : value + 1;
    });

    return colors;
  }, [todos]);

  const todoColorNums = useMemo(getTodoColorNums, [todos]);

  const checkTodo = async (id: number) => {
    try {
      await checkTodoAPI(id);
      console.log("checked!!!");
      // router.reload();
      // router.push("/");

      const newTodos = localTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });

      setLocalTodos(newTodos);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <div className="todo-list-header">
        <p className="todo-list-last-todo">
          TODO<span>{todos.length}</span>
        </p>
        {Object.keys(todoColorNums).map((color, index) => (
          <div key={index}>
            <span>
              {color}&nbsp;{todoColorNums[color]}
            </span>
          </div>
        ))}
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <div className="todo-left-side">
              <div
                className="todo-color-block"
                style={{ backgroundColor: `${palette.gray}` }}
              />
              <p
                className={`todo-text ${
                  todo.checked ? "checked-todo-text" : ""
                }`}
              >
                {todo.text}
              </p>
            </div>
            <div className="todo-right-side">
              {todo.checked && (
                <>
                  <button type="button" className="todo-button">
                    삭제
                  </button>
                  <button type="button" className="todo-button">
                    해제
                  </button>
                </>
              )}
              {!todo.checked && (
                <button
                  type="button"
                  className="todo-button"
                  onClick={() => checkTodo(todo.id)}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
