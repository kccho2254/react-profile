import React from "react";

const styles = {
  card: {
    margin: 20,
    backgroundColor: "rgb(159, 184, 159)",
    display: "flex",
    justifyContent: "space-around",
    opacity: ".9"
  },
  heading: {
    lineHeight: 2,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
    opacity: ".9"
  }
};

function Navbar() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Home</div>
      <div style={styles.heading}>Projects</div>
      <div style={styles.heading}>Contact</div>
    </div>
  );
}

export default Navbar;
