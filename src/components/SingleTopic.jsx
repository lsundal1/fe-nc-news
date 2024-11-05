import { useParams } from "react-router-dom";
// import { fetchArticlesByTopic } from "../../axios";
import Articles from "./Articles";
// import { useState } from "react";

export default function SingleTopic ({articles, setArticles}) {

    const { topic_slug } = useParams()
    
    return (
        <Articles topic_slug={topic_slug} articles={articles} setArticles={setArticles}></Articles>
    )
}