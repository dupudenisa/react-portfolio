import React from "react";
import myimage from "../assets/myimage.png"
import portImg from "../assets/portImg.jpeg";

const styles = {
  imageStyle: {
    height: 400,
    width: 350,
    padding: 0,
    margin: 0
  },
    cardStyle: {
  
      maxwidth: 30,
      padding: 100,
      opacity: 5

    },
    background:{
      backgroundImage : "url(" + portImg + ")",
      height: 700
      
  }
  
};

function About() {
  return (
    <div style={styles.background}>
    <div  className="card mb-3" style={styles.background}>>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img style={styles.imageStyle} src={myimage} className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">About Me</h5>
            <p className="card-text">My Name is Denisa Dupu and I am currently attending a full stack web developement bootcamp at Rice University.
          I am excited to learn something new every day, and am prepared to dive my foot into the coding world!</p>
            <p className="card-text"><small className="text-muted"></small></p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;

