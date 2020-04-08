import React from "react";
import home from "./assets/home .png";
import { Link } from "react-router-dom";

const styles = {
    headingStyle: {
        fontSize: 10,
        textAlign: "center",
        padding: 20
    },
    imgStyle: {
        height: 50,
        width: 50
    }
};

function Header(){
    return(
        <div>
            
            <Link to="/">
            <img style={styles.imgStyle} src={home} alt="link"/>
            </Link>
            
        </div>

    )
}

export default Header;