import React from "react"; // eslint-disable-line no-unused-vars
import SingleItem from "./SingleItem";

// eslint-disable-next-line react/prop-types
const ItemList = ({ title, items }) => {
  // console.log(title)
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <a className="item-list__link" href="#">
          Mostrar tudo
        </a>
      </div>

      <div className="item-list__container">
        {Array(items)
        .fill()
        .map((title, index) => (
          <SingleItem key={ `${title}-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
