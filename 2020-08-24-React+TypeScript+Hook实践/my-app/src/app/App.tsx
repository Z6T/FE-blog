import React, { useState, useEffect } from "react";
import ClassNames from "classnames";
import axios from "../api/axios";

import "../styles/App.css";
import TodoForm from "./TodoForm";

type Todo = {
  id: number;
  name: string;
  done: boolean;
};

type Todos = Todo[];

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todos>([]);

  const refreshTodos = () => {
    axios<Todos>("/api/todos").then(setTodos);
  };
  useEffect(() => {
    refreshTodos();
  }, []);
  const onToggleTodo = async (todo: Todo) => {
    await axios("/api/toggle", todo.id);
    refreshTodos();
  };
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <TodoForm refreshTodos={refreshTodos} />
          {todos.map((todo, index) => {
            return (
              <li
                onClick={() => onToggleTodo(todo)}
                key={index}
                className={ClassNames({
                  done: todo.done,
                })}
              >
                {todo.name}
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
};

export default App;
