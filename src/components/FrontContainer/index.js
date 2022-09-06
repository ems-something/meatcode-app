import React from "react";
import SocialMedia from "../SocialMedia";
import brush from "../../assets/img/BRUSH-3 2.png";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./styles.css";

function FrontContainer() {
    return (
        <div className="front-image__container">
            <header className="front-image__header">
                <div>
                    <div className="logo-container">
                        <h1>Logo</h1>
                    </div>
                </div>
                <div className="front-image__social-media">
                    <SocialMedia
                        socials={[
                        {
                            icon: faFacebookF,
                            url: "https://www.facebook.com/",
                            color: "#009CD9",
                        },
                        {
                            icon: faInstagram,
                            url: "https://www.instagram.com/",
                            color: "#B72C2C",
                        },
                        {
                            icon: faYoutube,
                            url: "https://www.youtube.com/",
                            color: "#D8AD3D",
                        },
                        ]}
                    />
                </div>
            </header>
            <div className="front-image__text-styled">
                <h2 className="front-image__text">
                El Secreto de tu cocina
                <img className="front-image__brush" src={brush} />
                </h2>
            </div>
        </div>
    );
}

export default FrontContainer;
