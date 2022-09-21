import React from "react";
import { useContext } from "react";
import Card from "../components/Card/index";
import { AppContext } from "./../App";

function Favorites() {
  const { favorites, onAddToFavorite } = useContext(AppContext);

  return (
    <>
      <div>
        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>Мої закладки</h1>
          </div>
        </div>
        <div className="d-flex flex-wrap p-20">
          {favorites.map((item) => (
            <Card
              key={item.id}
              {...item}
              favorited={true}
              onFavorite={onAddToFavorite}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Favorites;
