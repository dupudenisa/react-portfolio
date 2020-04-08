import React from "react";
import portImg from "../assets/portImg.jpeg";


const styles = {
    headingStyle: {
        fontSize: 20,
        textAlign: "center",
        padding: 150
       
    },
     background:{
         backgroundImage : "url(" + portImg + ")",
         height: 700
         
     }
    
};

function Index() {
    return (
        // eslint-disable-next-line no-template-curly-in-string
        <div style={styles.background}>
            <h1 style={styles.headingStyle}>
                Welcome to my page!
                <br></br>
                 Take a look at some of my recent projects 
            </h1>
        </div>

    );

}









export default Index 
