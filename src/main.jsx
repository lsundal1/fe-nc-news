import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ArticleProvider } from './contexts/ArticleContext.jsx'
import { UserProvider } from './contexts/UserContext.jsx'
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ArticleProvider>
  <UserProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </UserProvider>
  </ArticleProvider>
  </BrowserRouter>
)
