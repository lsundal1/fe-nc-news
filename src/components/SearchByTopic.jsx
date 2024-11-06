import { fetchTopics } from "../../axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SearchByTopic ({topic_slug}) {

    const [topics, setTopics] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchTopics().then(({data})=> {
            const topicsArray = data.topics.map((topic) => {
                return topic.slug
            })
            setTopics(topicsArray)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const handleChange = (e) => {
        e.preventDefault()
        navigate(`/topics/${e.target.value}`)
    }

    return (
        <div>
            <label htmlFor="topics">Search by topic: </label>
            <select name="topics" value={topic_slug} onChange={handleChange}>
                <option key="all">All</option>
                {topics.map((topic) => {
                    return <option key={topic} value={topic}>{topic}</option>
                })} 
            </select>
        </div>  
    )
}   