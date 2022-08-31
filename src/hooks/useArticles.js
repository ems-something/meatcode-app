import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function useArticles() {
    const [articles, setArticles] = useState([]);
    const [filter, setFilter] = useState("Todos");
    const baseUrl = "https://5eed24da4cbc340016330f0d.mockapi.io/api/articles";

    useEffect(() => {    
        getArticles();
        return () => {};
    }, [filter]);

    const getArticles = () => {
        setArticles([]);
        if (filter === "Todos")
            axios.get(baseUrl)
                .then((res) => {
                    const data = res.data;
                    setArticles(data);
                })
                .catch(error => console.error(""));
        else {
            axios.get(`${baseUrl}?filter=${filter}`)
                .then((res) => {
                    const data = res.data;
                    setArticles(data);
                })
                .catch(error => console.error(""));
        }
    };

    return { articles, filter, setFilter };
}
