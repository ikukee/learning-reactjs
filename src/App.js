import React,{ Component } from "react";
import './App.css';
import Hello from "./components/Hello";
import ClassHello from "./components/ClassHello";
import JsxHello from "./components/HelloJsx";
import PropsHello from "./components/PropsHello";
import ClassProps from "./components/ClassProps";
class App extends Component{
  render() {
    return(
    <div className="App">
      <Hello/>
      <ClassHello/>
      <JsxHello/>
      <PropsHello name="RED PANIS" />
      <PropsHello name="Children">
        <p>Im a child of ^</p>
      </PropsHello>
      <ClassProps name="HEY!" />
    </div>
    );
  }
}

export default App;
