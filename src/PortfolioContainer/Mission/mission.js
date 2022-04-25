import React, { useEffect } from "react";

import "aos/dist/aos.css";
import "./mission.css";

import brush from "../../assets/Home/4.png";
import GLPI from "../../assets/Home/GLPI.pdf";
import MVC from "../../assets/Home/MVC.pdf";
import secu from "../../assets/Home/secu.pdf";
import seg from "../../assets/Home/segmentation .pdf";
import desc from "../../assets/Home/descrptionsynphonie.pdf";
import TP1 from "../../assets/Home/TP1.pdf";
import TP2 from "../../assets/Home/TP2.pdf";
import TP3 from "../../assets/Home/TP3.pdf";
import TPIBM1 from "../../assets/Home/exercise_injectionSql.pdf";
import TPIBM2 from "../../assets/Home/exercise_xss.pdf";
import referencement from "../../assets/Home/referencement.pdf";
import formatage from "../../assets/Home/formatage.pdf";
import partager from "../../assets/Home/Partager.pdf";






export default function Mission() {
  return (
    <div id="Mission" className="Mission-container">
      <div className="title-Mission">
        <img
          className="brushImage-mission"
          src={brush}
          alt="you have problem with the image"
        />
        <h2 className="missionKit">Missions</h2>
      </div>
      <div className="display-Mission">
        <div className="mission2">
          <div className="mission-name2">
            <a href={GLPI}>
              <button
                className="btn primary-btn"
                style={{ backgroundColor: "#fe5756" }}
              >
                Description
              </button>
            </a>
          </div>
          <div className="Mission-desc2">
            <h2 className="titre-de-projet"> Mission GLPI </h2>
          </div>

        </div>
        <div className="mission2">
          <div className="mission-name2">
            <a href={MVC} >
              <button className="btn primary-btn" style={{ backgroundColor: "#fe5756" }} >Description </button>
            </a>
          </div>
          <div className="Mission-desc2">
            <h2 className="titre-de-projet"> TP MVC </h2>
          </div>
        </div>
        <div className="mission2">
          <div className="mission-name2">
            <a href={secu} >
              <button
                className="btn primary-btn"
                style={{ backgroundColor: "#fe5756" }}
              >
                Description
              </button>
            </a>
          </div>
          <div className="Mission-desc2">
            <h2 className="titre-de-projet"> TP de sécurisation </h2>
          </div>
        </div>
        <div className="mission2">
          <div className="mission-name2">
            <a href={seg}>
              <button
                className="btn primary-btn"
                style={{ backgroundColor: "#fe5756" }}
              >
                Description
              </button>
            </a>
          </div>
          <div className="Mission-desc2">
            <h2 className="titre-de-projet"> Mission segmentation d’un réseau en VLAN  </h2>
          </div>
        </div>
        <div className="mission2">
          <div className="mission-name2">
            <a href={TP1}>
              <button
                className="btn primary-btn"
                style={{ backgroundColor: "#fe5756" }}
              >
                Description TP1
              </button>
            </a>
            <a href={TP2}>
              <button
                className="btn primary-btn"
                style={{ backgroundColor: "#fe5756" }}
              >
                Description TP2
              </button>
            </a>
            <a href={TP3}>
              <button
                className="btn primary-btn"
                style={{ backgroundColor: "#fe5756" }}
              >
                Description TP3
              </button>
            </a>
            <a href={desc}>
              <button
                className="btn primary-btn"
                style={{ backgroundColor: "#fe5756" }}
              >
                Description TP4
              </button>
            </a>

          </div>
          <div className="Mission-desc2">
            <h2 className="titre-de-projet"> TP Symfony  </h2>
          </div>
        </div>

        <div className="mission2">
          <div className="mission-name2">
            <a href={TPIBM1}>
              <button
                className="btn primary-btn"
                style={{ backgroundColor: "#fe5756" }}
              >
                Description TP1
              </button>
            </a>
            <a href={TPIBM2}>
              <button
                className="btn primary-btn"
                style={{ backgroundColor: "#fe5756" }}
              >
                Description TP2
              </button>
            </a>
          </div>
          <div className="Mission-desc2">
            <h2 className="titre-de-projet"> Mission TP IBM  </h2>
          </div>
        </div>
        <div className="mission2">
          <div className="mission-name2">
            <a href={referencement}>
              <button
                className="btn primary-btn"
                style={{ backgroundColor: "#fe5756" }}>
                Description TP
              </button>
            </a>
          </div>
       
          <div className="Mission-desc2">
            <h2 className="titre-de-projet"> optimisation d’un site Web pour le référencement </h2>
          </div>
          

        </div>
      

      </div>
      
      <div className="mission2">
          <div className="mission-name2">
            <a href={formatage }>
              <button
                className="btn primary-btn"
                style={{ backgroundColor: "#fe5756" }}>
                Description TP
              </button>
            </a>
          </div>
       
          <div className="Mission-desc2">
            <h2 className="titre-de-projet"> formatage pc </h2>
          </div>
          

        </div>
        <div className="mission2">
          <div className="mission-name2">
            <a href={partager}>
              <button
                className="btn primary-btn"
                style={{ backgroundColor: "#fe5756" }}>
                Description TP
              </button>
            </a>
          </div>
       
          <div className="Mission-desc2">
            <h2 className="titre-de-projet">Partager des fichiers sur un réseau local </h2>
          </div>
          

        </div>
      
    </div>
  );
}
