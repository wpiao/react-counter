import React from 'react';

import Header from './Header/Header.jsx';
import Counter from './Counter/Counter.jsx';
import Footer from './Footer/Footer.jsx';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;