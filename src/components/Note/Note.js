import React from "react";
import visitImage from "../../images/railway1.jpg";

function Note(){
  return(
    <div class="card bg-dark text-white p-0 m-0" style={{width:"100%", height:"100%"}} >
      <img src={visitImage} class="card-img" alt="Railway-platform"></img>
    <div class="card-img-overlay mr-3 ">
    <div class="card text-white bg-info mr-3 mt-50" style={{width:"20rem", height:"25rem",opacity:"0.9"}}>
       <div class="card-header">Railway Ticket Reservation </div>
        <div class="card-body">
        <h5 class="card-title">Have a save ride</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Note;