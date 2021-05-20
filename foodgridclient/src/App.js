import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import axios from "axios";
import Login from "./components/Login";
import AddItem from "./components/AddItem";
import UserRegistration from "./components/UserRegistration";
import ListItems from "./components/ListItems";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <div
          style={{
            width: 100 + "vm",
            height: 80,
            backgroundColor: "lightblue",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">UserRegistration</Link>
          <Link to="/listitems">ListItems</Link>
          <Link to="/additem">AddItem</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={UserRegistration} />
          <Route path="/listitems" exact component={ListItems} />
          <Route path="/additem" exact component={AddItem} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

// const [viewMode, setViewMode] = useState("ListView");
// return (
//   <div className="App">
//     <h1>FoodGrid Application</h1>
//     <button onClick={() => setViewMode("AddView")}>Add New Item</button>
//     <button onClick={() => setViewMode("ListView")}>View List</button>
//     {viewMode === "AddView" && <AddItem />}
//     {viewMode === "ListView" && <ListItems />}
//   </div>
// );
