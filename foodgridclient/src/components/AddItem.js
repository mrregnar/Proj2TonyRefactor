import { useState } from 'react'
import axios from 'axios'

//import "./AddItem.css";

function AddItem() {
  const [item, setItem] = useState({
    itemName: '',
    itemSize: '',
    itemQuantity: '',
  })
  function handleChange(e) {
    console.log('change is being handled')
    const { name, value } = e.target
    setItem((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      }
    })
  }
  function addItem(e) {
    e.preventDefault()
    alert('item added')
    const newItem = {
      itemName: item.itemName,
      itemSize: item.itemSize,
      itemQuantity: item.itemQuantity,
    }
    axios.post('/items', newItem) //put new item here
  }

  return (
    <div class='AddItem-box'>
      <h2>Add Item</h2>
      <form>
        <div class='User-box'>
          <label htmlFor='itemName'>Name</label>
          <input
            onChange={handleChange}
            name='itemName'
            placeholder='item name'
            value={item.itemName}
            type='text'
          ></input>
        </div>
        <div class='User-box'>
          <label htmlFor='itemSize'>Size</label>
          <input
            onChange={handleChange}
            name='itemSize'
            placeholder='item size'
            value={item.itemSize}
            type='text'
          ></input>
        </div>
        <div class='User-box'>
          <label htmlFor='itemQuantity'>Quantity</label>
          <input
            onChange={handleChange}
            name='itemQuantity'
            placeholder='item quantity'
            value={item.itemQuantity}
            type='number'
          ></input>
        </div>
        <button onClick={addItem}>Submit</button>
      </form>
    </div>
  )
}

export default AddItem
