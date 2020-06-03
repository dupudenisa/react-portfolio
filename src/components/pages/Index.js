import React from "react";
import newImg from "../assets/newImg.jpg";



const styles = {
    headingStyle: {
        fontSize: 30,
        textAlign: "center",
        padding: 100, 
        fontFamily: "Suez One , serif"   
    },
     background:{
         backgroundImage : "url(" + newImg + ")",
         height: 700
         
     },
     fontStyle: {
        fontFamily: "Suez One , serif" 
    }
    
};

function Index() {
    return (
        
        <div style={styles.background}>
            <h1 style={styles.headingStyle}>
                 Denisa Dupu
            
               <h2 style={styles.headingStyle}> Full Stack Developer </h2> 
            </h1>
        </div>

    );

}









export default Index 
