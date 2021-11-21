import Navbar from "./components/navbar";
import Form from "./components/Form";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Form />
    </>
  );
}

export default App;
