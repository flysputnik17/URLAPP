import "./Item.css";

const Item = ({ item }) => {
  return (
    <div className="item">
      <img className="item__image" src={item.image} alt="item pic"></img>
      <h2 className="item__title">{item.title} </h2>
      <p className="item__description">{item.description}</p>
      <a
        className="item__url"
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.title}
      </a>
    </div>
  );
};

export default Item;
