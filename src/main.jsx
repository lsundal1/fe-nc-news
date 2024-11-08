import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ArticleProvider } from './contexts/ArticleContext.jsx'
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ArticleProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ArticleProvider>
  </BrowserRouter>
)
