import { useState, useEffect } from "react";
import axios from "axios";

function ListItems() {
  const [items, setItems] = useState([
    {
      itemName: "",
      itemSize: "",
      itemQuantity: "",
    },
  ]);

  useEffect(() => {
    fetch("/items")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((jsonRes) => setItems(jsonRes));
  });

  function deleteItem(id) {
    axios.delete("/items/" + id);
    alert("item deleted");
  }

  return items.map((item) => {
    return (
      <div>
        <h1>{item.itemName}</h1>
        <p>{item.itemSize}</p>
        <p>{item.itemQuantity}</p>
        <button onClick={() => deleteItem(item._id)}>DELETE ITEM</button>
      </div>
    );
  });
}

export default ListItems;
