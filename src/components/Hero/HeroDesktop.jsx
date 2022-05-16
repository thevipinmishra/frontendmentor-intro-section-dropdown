import Clients from "../Clients/Clients";

import heroImage from "../../images/image-hero-desktop.png";
import "./HeroDesktop.scss";

const HeroDesktop = ({ title, description }) => {
  return (
    <div className="hero-section-desktop">
      <div className="hero-section-desktop-inner container">
        <div className="content">
          <h1 className="section-title">{title}</h1>
          <p className="section-description">{description}</p>
          <a href="#" className="section-cta">
            Learn More
          </a>

          <div>
            <Clients />
          </div>
        </div>

        <div className="image">
          <img src={heroImage} role="presentation" />
        </div>
      </div>
    </div>
  );
};

export default HeroDesktop;
