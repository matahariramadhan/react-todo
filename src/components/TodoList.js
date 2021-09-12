import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, handleClearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
          />
        ))}
        <div class="d-grid gap-2 col-11 col-md-8 mx-auto mt-5">
          <button
            class="btn btn-danger"
            type="button"
            onClick={handleClearList}
          >
            Button
          </button>
        </div>
      </ul>
    );
  }
}
