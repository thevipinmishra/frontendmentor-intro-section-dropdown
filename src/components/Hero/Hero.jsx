import useMedia from "use-media";

import Clients from "../Clients/Clients";
import HeroDesktop from "./HeroDesktop";
import heroImageMobile from "../../images/image-hero-mobile.png";
import "./Hero.scss";

const Hero = ({ title, description }) => {
  const isDesktop = useMedia({ minWidth: 992 });

  return (
    <>
      {isDesktop ? (
        <HeroDesktop title={title} description={description} />
      ) : (
        <section className="hero-section">
          <div className="hero-section-inner">
            <img src={heroImageMobile} className="hero-image" alt="" />
          </div>
          <div className="container hero-content">
            <h2 className="hero-content-title">{title}</h2>
            <p className="hero-content-description">{description}</p>

            <a href="#" className="hero-content-cta">
              Learn more
            </a>
          </div>

          <Clients />
        </section>
      )}
    </>
  );
};

export default Hero;
