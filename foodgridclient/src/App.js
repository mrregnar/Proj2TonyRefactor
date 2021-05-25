import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import axios from "axios";
import Login from "./components/Login";
import AddItem from "./components/AddItem";
import UserRegistration from "./components/AddUser";
import ListItems from "./components/ListItems";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <div
          class="NavBar"
          // style={{
          //   width: 100 + "vm",
          //   height: 80,
          //   backgroundColor: "lightblue",
          // }}
        >
          <Link class="Link" to="/" style={{ margin: 10 }}>
            Home
          </Link>
          <Link to="/login" style={{ margin: 10 }}>
            Login
          </Link>
          <Link to="/register" style={{ margin: 10 }}>
            Sign Up
          </Link>
          <Link to="/listitems" style={{ margin: 10 }}>
            ListItems
          </Link>
          <Link to="/additem" style={{ margin: 10 }}>
            AddItem
          </Link>
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
