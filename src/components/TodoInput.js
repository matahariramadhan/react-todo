import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-4">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white override-input-group-text">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              value={item}
              onChange={handleChange}
            ></input>
          </div>
          <div class="d-grid gap-2 col-md-4 mx-auto mt-2">
            <button
              class={editItem ? "btn btn-success" : "btn btn-primary"}
              type="submit"
            >
              {editItem ? "Edit Todo" : "Add Todo"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
