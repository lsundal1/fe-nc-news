import SingleTopic from "./SingleTopic"

export default function Topics ({articles, setArticles}) {

    return (
    <div>
        <SingleTopic articles={articles} setArticles={setArticles}></SingleTopic>
    </div>
    ) 
}