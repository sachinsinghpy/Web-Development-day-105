// import logo from './logo.svg';

import { useState } from 'react';
import "./App.css"
import Navbar from './components/navbar';
import Footer from './components/footer';
import Container from './components/container';

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <Container/>
      <Navbar logoText="Sachin"/>
      <div className='value'>{value}</div>
      <button onClick={() => { setValue(value+1) }}>Click me</button>
      <Footer/>
      <Footer/>
      <Footer/>

    </div>
  );
}

export default App;
