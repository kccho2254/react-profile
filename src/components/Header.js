import React from "react";
import "../styles/Header.css";

function Header() {

  const styles = {
    header:{
      
      marginLeft: "20px",
      font: "Texturina"
    }
  }
  return (
    <header className="header">

      <h1 style={styles.header }>Kevin Cho -- Web Developer in Training</h1>
    </header>
  );
}

export default Header;
