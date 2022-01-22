import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  //FC - functional component type, it's a generic type

  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
