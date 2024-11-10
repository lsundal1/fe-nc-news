
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import '../App.css'
import Header from './Header'
import Home from './Home'
import Articles from './Articles'
import SingleArticle from "./SingleArticle"
import Error from "./Error"

function App() {

  const [articles, setArticles] = useState([])

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/articles" element={<Articles articles={articles} setArticles={setArticles}/>}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
        <Route path="*" element={<Error />}/>
      </Routes>  
    </div>
  )
}

export default App
