import React from "react";
import SocialIcon from "./components/SocialIcon";
import "./styles.css";

function SocialMedia({ socials = [{ url: "", icon: "", color: "#FFFFFF" }] }) {
    return (
        <ul className="social-media__container">
        {socials.map((social) => (
            <li key={social.url}>
                <a
                    className="social-media__link"
                    href={social.url}
                    target="_blank"
                    rel="noopener"
                    style={{
                    "--social-color": social.color,
                    }}
                >
                    <div className="icon-container">
                        <i>
                            <FontAwesomeIcon icon={social.icon} />
                        </i>
                    </div>
                </a>
            </li>
        ))}
        </ul>
    );
}

export default SocialMedia;