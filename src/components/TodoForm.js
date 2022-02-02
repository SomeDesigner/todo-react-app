import React, { useState } from 'react';

function TodoForm(props) {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 999999),
      value: value,
    });

    setValue('');
  }

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo-input"
          id="todoInput"
          placeholder="Add a todo"
          value={value}
          className="todo-input"
          onChange={handleChange}
        />
        <button type="submit" className="todo-button">
          Add todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
