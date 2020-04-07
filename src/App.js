import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Header />
          
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />

          <Footer/>

        </div>
      </Router>
    );
  }

export default App;