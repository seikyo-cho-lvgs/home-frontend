import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header"
import Footer from "./Footer";

const App = () => (
  <div className="content">
    <Header />
    <div>
      Home page Content
    </div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
