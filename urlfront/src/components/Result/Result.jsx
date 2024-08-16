import "./Result.css";
import Item from "../Item/Item";

const Result = () => {
  return (
    <div className="result">
      <div className="result__list">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Result;
