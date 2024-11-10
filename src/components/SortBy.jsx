import { useEffect, useState } from "react"

export default function SortBy ({setOrder, setSortBy}) {

    const [isAsc, setIsAsc] = useState(true)

    function handleChange (e) {
        e.preventDefault()
        setSortBy(e.target.value)
    }

    function handleClick (e) {
        setIsAsc(!isAsc)
        e.preventDefault()
        setOrder(isAsc? "asc" : "desc")
    }
    return (
        <div>
            <label className="sort-by" id="sort-by-label" htmlFor="sort-by">Sort by: </label>
            <select className="sort-by" name="sort-by" onChange={handleChange} >
                <option className="sort-by" key="Date" value="created_at">Date</option>
                <option className="sort-by" key="Comments" value="comment_count">Comments</option>
                <option className="sort-by" key="Likes" value="votes">Likes</option>
            </select>
            <button className="sort-by" onClick={handleClick}>{ isAsc? 'Ascending' : 'Descending'}</button>
        </div>
    )
}