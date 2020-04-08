
import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./components/pages/Index";

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <NavTabs />
                    <Header />

                    <Route exact path='/react-portfolio' component={Index} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />


                    <Footer />

                </div>
            </Router>
        );
    }
}

export default App;