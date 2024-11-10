import { fetchTopics } from "../../axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export default function SearchByTopic ({setTopic}) {

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
        e.target.value === "All"? navigate('/articles') : setTopic(e.target.value);
    }

    return (
        <div id="search-by-topic">
            <label className="dropdown-btn" htmlFor="topics">Search by topic: </label>
            <select onChange={handleChange}>
                <option className="dropdown-content" key="All">All</option>
                {topics.map((topic) => {
                    return <option key={topic} value={topic}>{topic}</option>
                })} 
            </select>
        </div>  
    )
}   