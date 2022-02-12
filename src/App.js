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
import { Route, Switch } from "react-router-dom";

import { useAuth } from "./hooks/use-auth";

import Login from "./pages/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import QuickView from "./pages/QuickView/QuickView";
import DetailedView from "./components/DetailedView/DetailedView";
import AuthContext from "./context/auth-context";

import "./App.css";

function App() {
  const { token, login, userId } = useAuth();
  console.log("token->", token);

  return (
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
        login: login,
      }}
    >
      <Switch>
        {/* available paths when not login  */}
        {!token && (
          <Route path="/login">
            <Login />
          </Route>
        )}

        {/* available paths when login  */}
        {token && (
          <Route path="/sistems">
            <MainHeader />
            <QuickView />
            {/* <DetailedView /> */}
          </Route>
        )}
        <Route path="*" exact>
          <h1>Page Not found</h1>
        </Route>
      </Switch>
    </AuthContext.Provider>
>>>>>>> 56ac826 (the context for auth was added)
  );
}

export default App;
