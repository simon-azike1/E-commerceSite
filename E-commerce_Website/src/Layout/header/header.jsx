import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CartIcon from '../../components/carticon';

export function Header() {
  const [searchByTitle, setSearchByTitle] = useState(null);
  const [mode, setMode] = useState("light");

  // FUNCTION TO PERFORM MODE OPERATION
  useEffect(() => {
    const savedMode = localStorage.getItem("mode") || "light";
    setMode(savedMode);
    document.documentElement.setAttribute("data-mode", savedMode);
  }, []);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem('mode', newMode);
    document.documentElement.setAttribute("data-mode", newMode);
  };

  // CSS styles using JavaScript objects
  const styles = {
    header: {
      width: "100%",
      height: "3rem",
      backgroundColor: mode === "light" ? '#007BFF' : '#FFDAB9', 
      display: "flex",
      flexDirection: 'row',
      gap: '-30px',
      justifyContent: 'space-evenly',
      alignItems: "center",
      position: "fixed",
      color: 'white',
    },
    button: {
      height: '30px',
      fontSize: "16px",
      cursor: "pointer",
      backgroundColor: mode === "light" ? '#007BFF' : '#FFDAB9', 
      color: mode === "light" ? 'white' : 'black',
      border: "none",
      borderRadius: "5px",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    addToCartButton: {
      backgroundColor: mode === "light" ? '#007BFF' : '#FFDAB9', 
      color: mode === "light" ? 'white' : 'black',
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
  };

  return (
    <div>
      <header style={styles.header}>
        <div>
          <Link to="/">
            <span><h2 style={{ textDecoration: 'none', color: 'white' }}> ShopeHere</h2></span>
          </Link>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search Products"
            onChange={(e) => { e.target.value }}
            style={{ height: '28px', borderRadius: '5px' }}
          />
        </div>
        <div>
          <button onClick={toggleMode} style={styles.button}>
            {mode === "light" ? "Switch to Dark Mode 🌙" : "Switch to Light Mode ☀️"}
          </button>
        </div>
        <div>
          <Link to="/checkOutPage">
            <span><CartIcon /></span>
          </Link>
        </div>
      </header>
      <br /><br /><br />
      {/* Example of Add to Cart button */}
      <div style={{ padding: "20px", textAlign: "center" }}>
        <button style={styles.addToCartButton}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Header;
