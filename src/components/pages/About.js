import React from "react";
import myimage from "../assets/myimage.png"

const styles = {
  imageStyle: {
    height: 400,
    width: 350,
    padding: 0,
    margin: 0
  },
    cardStyle: {
      maxwidth: 50,
      padding: 100

    }
  
};

function About() {
  return (

    <div className="card mb-3" style={styles.cardStyle}>
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
  );
}

export default About;

