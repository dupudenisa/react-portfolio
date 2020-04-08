import React from "react";
import newImg from "../assets/newImg.jpg";


const styles = {
  headingStyle: {
    fontSize: 40,
    textAlign: "center",
    
},
  linkStyle: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    

  },
  background:{
    backgroundImage : "url(" + newImg + ")",
    height: 700
    
}


}

function Contact(props) {
  return (
    <div style={styles.background}>
      <h1 style= {styles.headingStyle}>Contact Page</h1>
      <p>
      
      

      <div style={styles.linkStyle} className="form-group">
              <a href="https://www.linkedin.com/in/denisa-dupu-947894143/" target="_blank">Linkedin</a>
              </div>
              

          <div style={styles.linkStyle} className="form-group">
              <a href="https://github.com/dupudenisa"target="_blank">Github</a>
              
          </div>
      </p>
    
    </div>
  );
}

export default Contact;
