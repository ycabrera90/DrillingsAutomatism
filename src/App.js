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
import MainBar from "./components/UI/MainBar/MainBar";

function App() {
  return (
    <>
      <MainBar />
      {/* <Login /> */}
    </>
>>>>>>> 7c4dc0f (the MainBar component was added to the project)
  );
}

export default App;
