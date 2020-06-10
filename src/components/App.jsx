import React from "react";
import "./App.scss";

import Header from "./Header/Header.jsx";
import Counter from "./Counter/Counter.jsx";
import Footer from "./Footer/Footer.jsx";

class App extends React.Component {
  render() {
    return (
      <div id="calculator">
        <Header />
        <Counter />
        <Footer />
      </div>
    );
  }
}

export default App;
