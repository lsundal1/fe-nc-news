import { fetchTopics } from "../../axios";
import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";


export default function SearchByTopic ({setTopic}) {

    const [topics, setTopics] = useState([])

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

    return (
        <div id="drop-down">
            <details className="dropdown-hover">
            <summary className="btn m-1 bg-grey-100 w-48">Search by topic:</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-48 p-2 shadow">
                <li onClick={() => {setTopic('all')}}><a>all</a></li>
                {topics.map((topic)=> {
                    return <li key={topic} onClick={() => {setTopic(topic)}}><a>{topic}</a></li>
                })}
            </ul>
            </details>
        </div>
    )
}   