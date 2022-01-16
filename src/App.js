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

import Login from "./components/Login/Login";
import MainHeader from "./components/UI/MainHeader/MainHeader";
import QuickView from "./components/QuickView/QuickView";
import DetailedView from "./components/DetailedView/DetailedView";

function App() {
  return (
    <>
      {/* <Login /> */}
      <MainHeader />
      {/* <QuickView></QuickView> */}
      <DetailedView />
    </>
>>>>>>> 7c4dc0f (the MainBar component was added to the project)
  );
}

export default App;
