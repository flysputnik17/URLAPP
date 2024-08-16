import "./Item.css";

const Item = () => {
  return (
    <div className="item">
      <img
        className="item__image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiEi7kNyO3qT5gpybIiaUDBCTBT2kBj54Mg&s"
        alt="item pic"
      ></img>
      <h2 className="item__title">title </h2>
      <p className="item__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vero
        dicta dolores ullam!
      </p>
    </div>
  );
};

export default Item;
