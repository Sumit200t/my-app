import React from 'react';
import './App.css';
import './index.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/home/home';
import About from './component/about/about';
import GalleryWarp from './component/gallery/gallery';
import ContactWarp from './component/contact/contact';
import TryIt from './component/tryit/tryIt';
import CalculatorWarp from './component/calculator/calculator'
import FormWarp from './component/form/form';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/gallery" exact component={GalleryWarp} />
          <Route path="/contact" exact component={ContactWarp} />
          <Route path="/tryIt" exact component={TryIt} />
          <Route path="/calculator" exact component={CalculatorWarp} />
          {/* <Route path="/form" exact component={FormWarp} /> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
