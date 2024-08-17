import "./Result.css";
import Item from "../Item/Item";

const Result = ({ data }) => {
  return (
    <div className="result">
      <div className="result__list">
        {data.map((item) => {
          return <Item key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Result;
