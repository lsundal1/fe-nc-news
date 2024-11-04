import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext.jsx'
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <UserProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </UserProvider>
  </BrowserRouter>
)
