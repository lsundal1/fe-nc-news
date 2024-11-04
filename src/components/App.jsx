
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Header from './Header'
import Home from './Home'
import Articles from './Articles'
import '../App.css'

function App() {

  const [articles, setArticles] = useState([])

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<Articles articles={articles} setArticles={setArticles}/>}/>
      </Routes>  
    </div>
  )
}

export default App
