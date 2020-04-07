import React from "react";

 const styles = {
     headingStyle: {
         fontSize: 10,
         textAlign: "center",
         padding: 20
     },
     
 };

function Footer(){
    return(
        <div>
            <h1 style = {styles.headingStyle}>
            Copyright: Denisa Dupu 2020
            </h1>
        </div>

    );
}

export default Footer;