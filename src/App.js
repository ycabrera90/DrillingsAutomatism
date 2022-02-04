<<<<<<< HEAD
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <h1>This is my project</h1>
=======
import logo from "./logo.svg";
=======
>>>>>>> c34f7d8 (the react-icon package was added to the project)
import "./App.css";
import React from "react";
import { Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import QuickView from "./pages/QuickView/QuickView";
import DetailedView from "./components/DetailedView/DetailedView";

function App() {
  return (
    <>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/sistems" exact>
        <MainHeader />
        <QuickView></QuickView>
      </Route>
      {/* <DetailedView /> */}
    </>
>>>>>>> 7c4dc0f (the MainBar component was added to the project)
  );
}

export default App;
