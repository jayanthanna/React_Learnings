import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem todoDate="5/7/2024" todoName="Buy Juice" />
        <TodoItem todoDate="7/7/2024" todoName="Buy Milk" />
        <TodoItem todoDate="10/7/2024" todoName="Go to college" />
      </div>
    </center>
  );
}

export default App;
