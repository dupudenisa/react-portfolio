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

  },
  linkStyle: {
    textColor: "blue"
  },
  fontStyle: {
    fontFamily: "Suez One , serif" 
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
              <h5 className="card-title"> Web Developer - Houston, Texas. </h5>
              <p className="card-text"> 
              I take pride in solving complex problems 
              and turning them into simple beautiful interface designs.
              Check out my latest projects on my home page and contact me at dupudenisa@gmail.com
       

          </p>
            </div>

            <div className="card-body">

              <h5 className="card-title">Skills</h5>
             
              <img style={styles.iconImgs} src={reactImg} className="card-img" alt="reactImg" />
              <img style={styles.iconImgs} src={nodeImg} className="card-img" alt="nodeImg" />
              <img style={styles.iconImgs} src={jQ} className="card-img" alt="jQImg" />
              <img style={styles.iconImgs} src={heroku} className="card-img" alt="herokuImg" />
              <img style={styles.iconImgs} src={GitHub} className="card-img" alt="GHImg" />
              <img style={styles.iconImgs} src={js} className="card-img" alt="JSmg" />


            </div>

            

            
              <div style={styles.linkStyle} className="form-group">
                <a href="https://www.linkedin.com/in/denisa-dupu-947894143/" target="_blank">Linkedin</a>
              </div>
              
             


              
              <div style={styles.linkStyle} className="form-group">
                <a href="https://github.com/dupudenisa" target="_blank">Github</a>
              </div>
              
              
           </div>
          </div>
        </div>
      </div>
    
   
  );
}

export default About;

