
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import '../App.css'
import Header from './Header'
import Home from './Home'
import Articles from './Articles'
import SingleArticle from "./SingleArticle"
import Topics from "./Topics"
import SingleTopic from "./SingleTopic"

function App() {

  const [articles, setArticles] = useState([])

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<Articles articles={articles} setArticles={setArticles}/>}/>
        <Route path="/articles/:article_id" element={<SingleArticle/>}></Route>
        <Route path="/topics" element={<Topics articles={articles} setArticles={setArticles}/>}></Route>
        <Route path="/topics/:topic_slug" element={<SingleTopic articles={articles} setArticles={setArticles}/>}></Route>
      </Routes>  
    </div>
  )
}

export default App
