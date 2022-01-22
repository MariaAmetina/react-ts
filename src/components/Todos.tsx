import React from "react";

import TodoItem from "./TodoItem";
import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  //FC - functional component type, it's a generic type
  return (
    <ul>
      {props.items.map((item) => {
        return <TodoItem key={item.id} text={item.text} />;
      })}
    </ul>
  );
};

export default Todos;
