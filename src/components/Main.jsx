import React from "react"; // eslint-disable-line no-unused-vars
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
        <ItemList title="Artistas" items={8}/>

        <ItemList title="Musicas" items={20}/>
    </div>
  );
};

export default Main;
