// const Item = (props) => {
const Item = ({ foodItem }) => {
  // let { foodItem } = props;
  return <li className="list-group-item">{foodItem}</li>;
};

export default Item;
