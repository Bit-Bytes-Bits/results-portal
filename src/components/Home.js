import React from "react"; 
import Image from "../logo/logo.png";
// import Footer from "./Footer";
// import { Redirect } from "react-router-dom"; 

 
function Home({ isLoggedIn }) { 
 
  // if (!isLoggedIn) return <Redirect to="/login" />; 

  return (
    <div className="home-content"> 
      <div className="logo">
        <img src={Image} alt="Logo"/>
      </div>
      <div className="image-card">
        <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Graduating Students"/>
      </div>
      <div className="content">
        <h3>The Best Learning Institution</h3>
        <h1>WELCOME TO OUR UNIVERSITY</h1>
        <p>We believe there is nothing more important than education.</p>
      </div>
    </div>
  )
} 
 
export default Home;
