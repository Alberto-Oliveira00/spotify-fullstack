import React from "react"; // eslint-disable-line no-unused-vars
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  // console.log(title)

  const { pathname } = useLocation();
  // console.log(pathname)
  const isHome = pathname === "/";
  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>

        {isHome ? <Link to={path} className="item-list__link">
          Mostrar tudo
        </Link> : <></>}
        
      </div>

      <div className="item-list__container">
        {itemsArray.filter((currentValue, index) => index < finalItems)
          .map((currentObj, index) => (
            <SingleItem
              // id={currentObj.id}
              // name={currentObj.name}
              // image={currentObj.image}
              // banner={currentObj.banner}
              idPath={idPath}
              {...currentObj}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
