import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";

const TodoForm = props => {
  const [newTodo, setNewTodo] = useState("");
  const handleChanges = event => {
    setNewTodo(event.target.value);
  };
  return (
    <>
      <Form>
        <Input
          value={newTodo}
          onChange={handleChanges}
          type="text"
          name="todo"
          placeholder="Add Todo..."
        />
        <div>
          <Button
            color="primary"
            onClick={event => {
              event.preventDefault();
              props.addTodo(newTodo);
              setNewTodo("");
            }}
          >
            Add
          </Button>
        </div>
      </Form>
      <Button
        onClick={event => {
          event.preventDefault();
          props.clearCompleted();
        }}
      >
        Clear Completed
      </Button>
    </>
  );
};

export default TodoForm;