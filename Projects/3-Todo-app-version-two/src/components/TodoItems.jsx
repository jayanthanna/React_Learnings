import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.duedate} todoName={item.name} />
      ))}
      {/* <TodoItem todoDate="5/7/2024" todoName="Buy Juice" />
      <TodoItem todoDate="7/7/2024" todoName="Buy Milk" />
      <TodoItem todoDate="10/7/2024" todoName="Go to college" /> */}
    </div>
  );
};

export default TodoItems;
