import { useState, useEffect } from "react";
import "./App.css";
//import axios from "axios";
import AddItem from "./components/AddItem";
import ListItems from "./components/ListItems";

function App() {
  const [viewMode, setViewMode] = useState("ListView");
  return (
    <div className="App">
      <h1>FoodGrid Application</h1>
      <button onClick={() => setViewMode("AddView")}>Add New Item</button>
      <button onClick={() => setViewMode("ListView")}>View List</button>
      {viewMode === "AddView" && <AddItem />}
      {viewMode === "ListView" && <ListItems />}
    </div>
  );
}

export default App;
