import { useState } from "react"

export default function SortBy ({setOrder, setSortBy}) {

    const [isAsc, setIsAsc] = useState(true)

    function handleClick (e) {
        setIsAsc(!isAsc)
        e.preventDefault()
        setOrder(isAsc? "asc" : "desc")
    }
    return (

    <div id="drop-down">
        <details className="dropdown-hover">
        <summary className="btn m-1">Sort by:</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a onClick={e => setSortBy('created_at')}>Date</a></li>
            <li><a onClick={e => setSortBy('comment_count')}>Comments</a></li>
            <li><a onClick={e => setSortBy('votes')}>Likes</a></li>
        </ul>
        </details>
        <button className="btn m-1" onClick={handleClick}>{ isAsc? 'Ascending' : 'Descending'}</button>
    </div>
    )
    
}