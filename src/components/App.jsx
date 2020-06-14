import React from "react";
import "./App.scss";

import Header from "./Header.jsx";
import Counter from "./Counter.jsx";
import Footer from "./Footer.jsx";

const App = (props) => {
  return (
    <div className="counter">
      <Header />
      <Counter />
      <Footer />
    </div>
  );
};

export default App;
