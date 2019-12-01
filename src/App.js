import React, { Fragment } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import Error from "./Pages/Error";
import Nav from "./Components/Nav";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </Fragment>
  );
}

export default App;
