import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


import { dataActions } from "./store/datas-slice";
import Login from "./pages/Login/Login";
import QuickView from "./pages/QuickView/QuickView";
import DetailedView from "./components/DetailedView/DetailedView";
import LayOut from "./components/UI/LayOut/LayOut";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { systemDatas } = useSelector((state) => state.data);

  const isSystemDatasEmpty = Object.keys(systemDatas).length === 0;


  // Load datas when the app start
  useEffect(() => {
    dispatch(dataActions.fecthData());
  }, []);

  return (
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
      {isLoggedIn && !isSystemDatasEmpty && (
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
  );
}

export default App;
