import { useState } from "react"

export default function SortBy ({setOrder, setSortBy}) {

    const [isAsc, setIsAsc] = useState(false)

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
        <div display="inline-flex">
            <label htmlFor="sort-by">Sort by: </label>
            <select name="sort-by" onChange={handleChange} >
                <option key="Date" value="created_at">Date</option>
                <option key="Comments" value="comment_count">Comments</option>
                <option key="Likes" value="votes">Likes</option>
            </select>
            <button onClick={handleClick}>{ isAsc? 'Ascending' : 'Descending'}</button>
        </div>
    )
}