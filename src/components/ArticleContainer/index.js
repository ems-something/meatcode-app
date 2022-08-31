import React from "react";
import Article from "../Article";
import Spinner from 'react-bootstrap/Spinner';
import "./styles.css";

function ArticleContainer({ articles = [] }) {
    return articles.length > 0 ? (
        <div className="articles-container">
            {articles.map((art) => (
                <React.Fragment key={art.id}>
                    <Article artInfo={art} />
                </React.Fragment>
            ))}
        </div>
        ) : (
        <div className="articles-container__loader">
            
        </div>
        );
}

export default ArticleContainer;
