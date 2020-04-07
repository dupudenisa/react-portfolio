import React from "react";

const styles = {
    headingStyle: {
        fontSize: 10,
        textAlign: "center",
        padding: 20
    },
};

function Header(){
    return(
        <div>
            <h1 style={styles.headingStyle}>
            PORTFOLIO - ReactJS App
            </h1>
        </div>

    )
}

export default Header;