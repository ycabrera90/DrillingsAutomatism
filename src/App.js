<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <h1>This is my project</h1>
=======
import logo from "./logo.svg";
import "./App.css";

import Login from "./components/Login/Login";
import MainHeader from "./components/UI/MainHeader/MainHeader";

function App() {
  return (
    <>
      {/* <Login /> */}
      <MainHeader />
    </>
>>>>>>> 7c4dc0f (the MainBar component was added to the project)
  );
}

export default App;
