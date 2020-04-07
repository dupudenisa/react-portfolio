import React from "react";

import PasswordGenerator from "../assets/PasswordGenerator.png";
import Proj1 from "../assets/project1-1.png";
import weatherF from "../assets/weatherF.png";
import project2 from "../assets/project2.png";

function Home() {

const styles = {
  imageStyle: {
    height: 500, 
    width: 750
  }
};

  return (

    <div>

<div className="col mb-4">
        <div className="card">
        <h5 className="card-title">My First Group Project</h5>
        <a href="https://github.com/robertharris95/RDOProject1" target="_blank">Loqal Project 1</a>
           <a href="https://robertharris95.github.io/RDOProject1/" target="_blank">Deployment</a>
          <img style = {styles.imageStyle} src={Proj1} className="card-img-top" alt="Proj1" />
          <div className="card-body">

          </div>
        </div>
      </div>

      <div className="col mb-4">
        <div className="card">
        <h5 className="card-title">My Second Group Project</h5>
        <a href="https://github.com/dupudenisa/Project-2" target="_blank"> Art Gallery Project 2</a>
          <a href="https://mighty-journey-05291.herokuapp.com/" target="_blank">Deployment</a>
          <img style = {styles.imageStyle} src={project2} className="card-img-top" alt="..." />
          <div className="card-body">
          </div>
        </div>
      </div>


      
        <div className="col mb-4">
          <div className="card">
          <h5 className="card-title">Password Generator</h5>
          <a href="https://github.com/dupudenisa/randompassword-application-javascript" target="_blank">PasswordGenerator</a>
                <br></br>
             <a href="https://dupudenisa.github.io/randompassword-application-javascript/" target="_blank">Deployment</a>
            <img style = {styles.imageStyle} src={PasswordGenerator} className="card-img-top" alt="Passgen" />
            <div className="card-body"> 
            </div>
          </div>
      </div>


      

      <div className="col mb-4">
        <div className="card">
        <h5 className="card-title">Weather Application</h5>
            <a href="https://github.com/dupudenisa/weather-forecast" target="_blank">Weather</a>
            <a href="https://dupudenisa.github.io/weather-forecast/" target="_blank">Deployment</a>
          <img style = {styles.imageStyle} src={weatherF} className="card-img-top" alt="weatherF" />
          <div className="card-body">
          </div>
        </div>
      </div>

      <div className="col mb-4">
        <div className="card">
          <img style = {styles.imageStyle} src={project2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <a href="https://github.com/dupudenisa/Project-2" target="_blank">Project/</a>
          <a href="https://mighty-journey-05291.herokuapp.com/" target="_blank">deployment</a>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>

    </div >
  );
}

export default Home;


