import React, { useState } from "react";
import ItemButton from "./components/ItemButton";
import ItemInfo from "./components/ItemInfo";
import ItemQuantity from "./components/ItemQuantity";
import ItemTotal from "./components/ItemTotal";
import ItemImage from "./components/ItemImage";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div className="item">
      <ItemImage src={info.image} alt="" />
      <ItemInfo className="item-info">
        <h2>{info.name}</h2>
        <p>{info.desc}</p>
      </ItemInfo>
      <ItemQuantity>
        <ItemButton
          className="item-less"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </ItemButton>
        <ItemTotal>{total ? total : ""}</ItemTotal>
        <ItemButton onClick={handleAddClick}>+</ItemButton>
      </ItemQuantity>
    </div>
  );
}
