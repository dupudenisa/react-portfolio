import React from "react";
import myimage from "../assets/myimage.png"
import newImg from "../assets/newImg.jpg";
import reactImg from "../assets/reactImg.png";
import nodeImg from "../assets/node.jpg";
import jQ from "../assets/jQ.jpg";
import heroku from "../assets/heroku.png";
import GitHub from "../assets/GitHub-Mark.png";
import js from "../assets/JS.png";

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
  background: {
    backgroundImage: "url(" + newImg + ")",
    height: 700

  },
  iconImgs: {
    height: 90,
    width: 90

  }

};

function About() {
  return (
    <div style={styles.background}>
      <div className="card mb-3" style={styles.background}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img style={styles.imageStyle} src={myimage} className="card-img" alt="myimg" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">About Me</h5>
              <p className="card-text">My Name is Denisa Dupu and I am currently attending a full stack web developement bootcamp at Rice University.
            I am excited to learn something new every day, and am prepared to dive my foot into the coding world!
          </p>
            </div>

            <div className="card-body">

              <h5 className="card-title">Skills</h5>
              <p className="card-text">These are my skills</p>
              <img style={styles.iconImgs} src={reactImg} className="card-img" alt="reactImg" />
              <img style={styles.iconImgs} src={nodeImg} className="card-img" alt="nodeImg" />
              <img style={styles.iconImgs} src={jQ} className="card-img" alt="jQImg" />
              <img style={styles.iconImgs} src={heroku} className="card-img" alt="herokuImg" />
              <img style={styles.iconImgs} src={GitHub} className="card-img" alt="GHImg" />
              <img style={styles.iconImgs} src={js} className="card-img" alt="JSmg" />


            </div>

            

            <div className="card">
              <div className="card-body">
              <div style={styles.linkStyle} className="form-group">
                <a href="https://www.linkedin.com/in/denisa-dupu-947894143/" target="_blank">Linkedin</a>
              </div>
              </div>
              </div>


              <div className="card">
              <div className="card-body">
              <div style={styles.linkStyle} className="form-group">
                <a href="https://github.com/dupudenisa" target="_blank">Github</a>
              </div>
              </div>
              
           
          </div>
        </div>
      </div>
    </div>
    </div >
  );
}

export default About;

