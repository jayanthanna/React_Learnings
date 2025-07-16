import styles from "./Item.module.css";

// const Item = (props) => {
const Item = ({ foodItem }) => {
  // let { foodItem } = props;
  // return (
  //   <li className="list-group-item kg-item">
  //     <span>{foodItem}</span>
  //   </li>
  // );
  return (
    <li className={`${styles["kg-item"]}`}>
      <span>{foodItem}</span>
    </li>
  );
};

export default Item;
