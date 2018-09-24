import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import HotSpring from "./components/HotSpring";
import Navigation from "./components/Navbar";
// import HotSpring1 from "./components/HotSpring1";
import HotSpring2 from "./components/HotSpring2";
import HotSpring3 from "./components/HotSpring3";
import HotSpring4 from "./components/HotSpring4";
import HotSpring5 from "./components/HotSpring5";
import HotSpring6 from "./components/HotSpring6";
import HotSpring7 from "./components/HotSpring7";
import Contact from "./components/Contact";

ReactDOM.render(<Navigation />, document.getElementById("About"));
ReactDOM.render(
  <About name="Sarwan Dass Singh" />,
  document.getElementById("About1")
);
ReactDOM.render(<HotSpring />, document.getElementById("HotSpring"));
ReactDOM.render(<App />, document.getElementById("HotSpring1"));
ReactDOM.render(<HotSpring2 />, document.getElementById("HotSpring2"));
ReactDOM.render(<HotSpring3 />, document.getElementById("HotSpring3"));
ReactDOM.render(<HotSpring4 />, document.getElementById("HotSpring4"));
ReactDOM.render(<HotSpring5 />, document.getElementById("HotSpring5"));
ReactDOM.render(<HotSpring6 />, document.getElementById("HotSpring6"));
ReactDOM.render(<HotSpring7 />, document.getElementById("HotSpring7"));
ReactDOM.render(<Contact />, document.getElementById("Contact"));

registerServiceWorker();
