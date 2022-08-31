import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import "./styles.css";

function Article({ artInfo }) {
    const { cat, title, img, content, url, createdAt, id } = artInfo;
    const [loaded, setLoaded] = useState(true);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} onLoad={() => setLoaded(false)} />
            {loaded ? (
            <div className="article-container__loader">
                <Spinner />
            </div>
            ) : (
            <></>
            )}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{content}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Article;