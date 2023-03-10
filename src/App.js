import React, { Component } from "react";
import Overview from "./components/overview";
import uniqid from "uniqid";

class App extends Component {

  constructor() {
    super();
    this.state = {
      task: {
        text: "",
        id: uniqid()
      },
      tasks: [],
    };
  }

  handleInputChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      task: {
        text: "",
        id: uniqid()
      },
      tasks: this.state.tasks.concat(this.state.task)
    });
  };

  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="taskInput">Add your task</label>
          <input type="text" placeholder="Write something.." name="taskInput" onChange={this.handleInputChange} value={task.text}></input>
          <button type="submit">
            Submit Task
          </button>
        </form>
        <Overview tasks={tasks}/>
      </div>
    );
  }
}

export default App;
