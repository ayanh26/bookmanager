import React from "react";
import logo from "./logo.svg";
import Bookitem from "./components/Bookitem";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"

import Edit from "./pages/Edit";
import MainNavbar from "./components/Navbar";
import Books from "./pages/Books";
import Add from "./components/Add";
import Delete from "./components/Delete";

function App() {
  const [DUMMY, setDUMMY] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/books/')
    .then(response => {
      setDUMMY(response.data)
    })
    .catch((error) => {
      console.log(error);
    })

  },[])


  const addhandler = (newbook) => {
    setDUMMY(DUMMY.concat(newbook));
  };

  const deletehandler = (booktodelete) => {
    setDUMMY(DUMMY.filter(item => item.title!=booktodelete))
  };

  return (
    <div className="App">
      <MainNavbar />
      <Router>
        <Route path="/" exact>
          <Books BookItems={DUMMY} setDUMMY={setDUMMY}/>
        </Route>
        <Route path="/edit" exact>
          <Edit Bookitems={DUMMY} add={addhandler} />
        </Route>
        <Route path="/add" exact>
          <Add Bookitems={DUMMY} add={addhandler} />
        </Route>
        <Route path="/delete" exact>
          <Delete Bookitems={DUMMY} delete={deletehandler}/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
