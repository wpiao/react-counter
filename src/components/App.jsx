import React from 'react';

import Header from './Header.jsx';
import Counter from './Counter.jsx';
import Footer from './Footer.jsx';

const App = props => {
  return (
    <React.Fragment>
      <Header />
      <Counter />
      <Footer />
    </React.Fragment>
  )
}

export default App;