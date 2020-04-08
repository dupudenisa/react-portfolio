import React from "react";
import newImg from "../assets/newImg.jpg";



const styles = {
    headingStyle: {
        fontSize: 20,
        textAlign: "center",
        padding: 150,
        
       
    },
     background:{
         backgroundImage : "url(" + newImg + ")",
         height: 700
         
     }
    
};

function Index() {
    return (
        
        <div style={styles.background}>
            <h1 style={styles.headingStyle}>
                Hello! I am Denisa Dupu
                <br></br>
                 Take a look at some of my recent projects 
            </h1>
        </div>

    );

}









export default Index 
