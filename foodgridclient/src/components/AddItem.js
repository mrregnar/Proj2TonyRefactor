import { useState } from "react";
import axios from "axios";

function AddItem() {
  const [item, setItem] = useState({
    itemName: "",
    itemSize: "",
    itemQuantity: "",
  });
  function handleChange(e) {
    console.log("change is being handled");
    const { name, value } = e.target;
    setItem((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }
  function addItem(e) {
    e.preventDefault();
    alert("item added");
    const newItem = {
      itemName: item.itemName,
      itemSize: item.itemSize,
      itemQuantity: item.itemQuantity,
    };
    axios.post("/newitem", newItem); //put new item here
  }
  return (
    <div>
      <h2>Add Item</h2>
      <form>
        <label htmlFor="itemName">Name</label>
        <input
          onChange={handleChange}
          name="itemName"
          placeholder="item name"
          value={item.itemName}
          type="text"
        ></input>
        <label htmlFor="itemSize">Size</label>
        <input
          onChange={handleChange}
          name="itemSize"
          placeholder="item size"
          value={item.itemSize}
          type="text"
        ></input>
        <label htmlFor="itemQuantity">Quantity</label>
        <input
          onChange={handleChange}
          name="itemQuantity"
          placeholder="item quantity"
          value={item.itemQuantity}
          type="number"
        ></input>
        <br /> <button onClick={addItem}>ADD ITEM</button>
      </form>
    </div>
  );
}

export default AddItem;
