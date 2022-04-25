import React, { useEffect } from "react";

import "aos/dist/aos.css";
import "./Tab-comp.css";

import brush from "../../assets/Home/4.png";
import tableau from "../../assets/Home/tableau1.pdf";
import CV from "../../assets/Home/CV.pdf";

export default function TabComp () {
  return (
    <div id="Mission" className="TabComp-container">
      <div className="title-TabComp">
        <img
          className="brushImage-TabComp"
          src={brush}
          alt="you have problem with the image"
        />
        <h2 className="TabCompKit">Tableau de competance</h2>
      </div>

      <div className="display-TabComp">
        <div className="TabComp">
          <div className="TabComp-but" style={{marginBottom:"150px"}}>
          <a href={tableau} >
          <button
                className="btn primary-btn"
                style={{ backgroundColor: "#fe5756" }}
              >
              tableau de competance
              </button> 
              
            
            </a>
          </div>


        </div>
        </div>
      </div>
  );
}
