import React, { useState, useEffect } from "react";
import Item from "./Item.js";

export default function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://covid-shop-mcs.herokuapp.com")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="shop">
      {items.map((item) => (
        <Item info={item} key={item.id} />
      ))}
    </div>
  );
}
