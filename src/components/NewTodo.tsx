import React, { useRef } from "react";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    //const enteredText = todoTextInputRef.current?.value;
    const enteredText = todoTextInputRef.current!.value; //если !.value, то мы говорим TypeScript-у, что значение будет точно не null/underfind

    if (enteredText?.trim().length === 0) {
      //throw an error
      return;
    }

    props.onAddTodo(enteredText); //тк onAddTodo не должен нам что-то возвращать, присваиваем ему тип <{ onAddTodo: (text: string) => void }>
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
