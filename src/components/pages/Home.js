import React from "react";
import portImg from "../assets/portImg.jpeg";

import PasswordGenerator from "../assets/PasswordGenerator.png";
import weatherF from "../assets/weatherF.png";
import project2 from "../assets/project2.png";
import HC from "../assets/HandleCare.png";

function Home() {

  const styles = {
    imageStyle: {
      height: 400,
      width: 550
    },
    background: {
      backgroundImage: "url(" + portImg + ")",
      height: 700

    },
    fontStyle: {
      fontFamily: "Suez One , serif" 
    }
  };

  return (

    <div>
      <div className="card">
        <div className="row no-gutters">
          <div className="col-sm-6">
            <a href="https://github.com/dupudenisa/HandleCare" target="_blank">HandleCare/</a>
            <a href="https://aqueous-falls-73635.herokuapp.com/" target="_blank">Deployment</a>
            <img style={styles.imageStyle} src={HC} className="card-img-top" alt="Proj" />
          </div>

          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"> HandleCare is a React application made for Senior Assisted Living facilities where caregivers can keep track of their residents more effectively on a daily basis,
               as well as sharing the progress with the residents family members from home. Working in an assisted living facility inspired me to create an application where everyone can benefit from and
                use to make everyones lives easier. With this application, caregivers can easily communicate with the nurses on how each resident is doing, and the family members from home can be more at ease with viewing this information.  
          </p>
            </div>
          </div>
        </div>

      </div>




      <div className="card">
        <div className="row no-gutters">
          <div className="col-sm-6">
            <a href="https://github.com/dupudenisa/Project-2" target="_blank"> Art Gallery Group Project/</a>
            <a href="https://mighty-journey-05291.herokuapp.com/" target="_blank">Deployment</a>
            <img style={styles.imageStyle} src={project2} className="card-img-top" alt="..." />
          </div>

          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"> An application which allows you to add, view, and comment on virtual art as a community.
               In this group project I was in charge of the user authentication.I used Passport in order to successfully implement the authentication. 
          </p>
            </div>
          </div>
        </div>
      </div>





      <div className="card">
        <div className="row no-gutters">
          <div className="col-sm-6">
            <a href="https://github.com/dupudenisa/randompassword-application-javascript" target="_blank">PasswordGenerator/</a>
            <a href="https://dupudenisa.github.io/randompassword-application-javascript/" target="_blank">Deployment</a>
            <img style={styles.imageStyle} src={PasswordGenerator} className="card-img-top" alt="Passgen" />
          </div>


          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">This is an an application that generates a random password based on user-selected criteria
               featuring dynamically updated HTML and CSS powered by JavaScript code. 
          </p>
            </div>
          </div>
        </div>
      </div>






      <div className="card">
        <div className="row no-gutters">
          <div className="col-sm-5">
            <a href="https://github.com/dupudenisa/weather-forecast" target="_blank">Weather/</a>
            <a href="https://dupudenisa.github.io/weather-forecast/" target="_blank">Deployment</a>
            <img style={styles.imageStyle} src={weatherF} className="card-img-top" alt="weatherF" />
          </div>

          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">An application using a web API to calculate  weather in different cities. This application is retrieving data from OpenWeather API. 
          </p>
            </div>
          </div>
        </div>
      </div>




    </div>
  );
}

export default Home;


