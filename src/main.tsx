import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Favorites from './pages/Favorites.tsx'
import CoinDetails from './pages/CoinDetails.tsx'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>
    },
    {
      path: '/favorites',
      element: <Favorites/>
    },
    {
      path: '/coin/:id',
      element: <CoinDetails/>
    }
  ]
)



createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
