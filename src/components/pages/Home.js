import React from "react";
import portImg from "../assets/portImg.jpeg";

import PasswordGenerator from "../assets/PasswordGenerator.png";
import Proj1 from "../assets/project1-1.png";
import weatherF from "../assets/weatherF.png";
import project2 from "../assets/project2.png";

function Home() {

  const styles = {
    imageStyle: {
      height: 400,
      width: 550
    },
    background: {
      backgroundImage: "url(" + portImg + ")",
      height: 700

    }
  };

  return (

    <div>
      <div className="card">
        <h5 className="card-title">My First Group Project</h5>
        <div className="row no-gutters">
          <div className="col-md-6">
            <a href="https://github.com/robertharris95/RDOProject1" target="_blank">Loqal Project 1/</a>
            <a href="https://robertharris95.github.io/RDOProject1/" target="_blank">Deployment</a>
            <img style={styles.imageStyle} src={Proj1} className="card-img-top" alt="Proj1" />
          </div>

          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card-title">About Me</h5>
              <p className="card-text"> This is the summery of the project
          </p>
            </div>
          </div>
        </div>

      </div>




      <div className="card">
        <h5 className="card-title">My Second Group Project</h5>
        <div className="row no-gutters">
          <div className="col-md-6">
            <a href="https://github.com/dupudenisa/Project-2" target="_blank"> Art Gallery Project 2/</a>
            <a href="https://mighty-journey-05291.herokuapp.com/" target="_blank">Deployment</a>
            <img style={styles.imageStyle} src={project2} className="card-img-top" alt="..." />
          </div>

          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card-title">About Me</h5>
              <p className="card-text">This is the summery of the project
          </p>
            </div>
          </div>
        </div>
      </div>





      <div className="card">
        <h5 className="card-title">Password Generator</h5>
        <div className="row no-gutters">
          <div className="col-md-6">
            <a href="https://github.com/dupudenisa/randompassword-application-javascript" target="_blank">PasswordGenerator/</a>
            <br></br>
            <a href="https://dupudenisa.github.io/randompassword-application-javascript/" target="_blank">Deployment</a>
            <img style={styles.imageStyle} src={PasswordGenerator} className="card-img-top" alt="Passgen" />
          </div>


          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card-title">About Me</h5>
              <p className="card-text">This is the summery of the project
          </p>
            </div>
          </div>
        </div>
      </div>






      <div className="card">
        <h5 className="card-title">Weather Application</h5>
        <div className="row no-gutters">
          <div className="col-md-6">
            <a href="https://github.com/dupudenisa/weather-forecast" target="_blank">Weather/</a>
            <a href="https://dupudenisa.github.io/weather-forecast/" target="_blank">Deployment</a>
            <img style={styles.imageStyle} src={weatherF} className="card-img-top" alt="weatherF" />
          </div>

          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card-title">About Me</h5>
              <p className="card-text">This is the summery of the project
          </p>
            </div>
          </div>
        </div>
      </div>




    </div>
  );
}

export default Home;


