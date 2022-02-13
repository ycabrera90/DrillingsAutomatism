<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 56ac826 (the context for auth was added)
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
=======
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
<<<<<<< HEAD
>>>>>>> 429efe3 (the DetaiedView was added)
=======
import { useSelector } from "react-redux";
>>>>>>> ec4f3f4 (A bug in localStorageDriver was fixed)

import Login from "./pages/Login/Login";
import QuickView from "./pages/QuickView/QuickView";
import DetailedView from "./components/DetailedView/DetailedView";
import LayOut from "./components/UI/LayOut/LayOut";

import "./App.css";

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/sistems" exact>
        <MainHeader />
        <QuickView />
      </Route>
      {/* <DetailedView /> */}
<<<<<<< HEAD
    </>
>>>>>>> 7c4dc0f (the MainBar component was added to the project)
=======
      <Route path="*" exact>
        <h1>Page Not found</h1>
      </Route>
    </Switch>
>>>>>>> df0bd84 (the path 'Not found' was added)
=======
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login,
        logout,
      }}
    >
      {!firstMount && (
        <BrowserRouter>
          {/* avalaible paths when not login */}
          {!isLoggedIn && (
            <Switch>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="*" exact>
                <Redirect to="/login" />
              </Route>
            </Switch>
          )}

          {/* avalaible paths when login */}
          {isLoggedIn && (
            <LayOut>
              <Switch>
                <Route path="/sistems" exact>
                  <QuickView />
                </Route>
                <Route path="/sistems/:sysId" exact>
                  <DetailedView />
                </Route>
                <Route path="*" exact>
                  <Redirect to="/sistems" />
                </Route>
              </Switch>
            </LayOut>
          )}
        </BrowserRouter>
      )}
    </AuthContext.Provider>
>>>>>>> 56ac826 (the context for auth was added)
=======
    <BrowserRouter>
      {/* avalaible paths when not login */}
      {!isLoggedIn && (
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="*" exact>
            <Redirect to="/login" />
          </Route>
        </Switch>
      )}

      {/* avalaible paths when login */}
      {isLoggedIn && (
        <LayOut>
          <Switch>
            <Route path="/sistems" exact>
              <QuickView />
            </Route>
            <Route path="/sistems/:sysId" exact>
              <DetailedView />
            </Route>
            <Route path="*" exact>
              <Redirect to="/sistems" />
            </Route>
          </Switch>
        </LayOut>
      )}
    </BrowserRouter>
>>>>>>> ec4f3f4 (A bug in localStorageDriver was fixed)
  );
}

export default App;
