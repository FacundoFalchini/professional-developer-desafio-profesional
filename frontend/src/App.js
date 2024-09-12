import logo from "./logo.svg";
import Header from "./components/Header/Header";
import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <div className="h-[3000px] bg-gray-200"></div>
    </Fragment>
  );
}

export default App;
