import { fetchTopics } from "../../axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SearchByTopic ({topic_slug}) {

    const [topics, setTopics] = useState([])
    const [url, setUrl] = useState("")

    useEffect(() => {
        fetchTopics().then(({data})=> {
            setTopics(data.topics)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const handleChange = (e) => {
        e.preventDefault()
        setUrl(`/topics/${e.target.value}`)
        console.log(url)
    }

    return (
        <div>
            <label htmlFor="topics">Search by topic: </label>
            <Link to={url}>
                <select name="topics" value={topic_slug} onChange={handleChange}>
                    <option key="All">All</option>
                    {topics.map((topic) => {
                        return <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
                    })}
                </select>
            </Link>
        </div>
    )
}   