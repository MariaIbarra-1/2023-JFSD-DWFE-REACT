import { useState, useEffect } from "react"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import NotFound from "./components/NotFound/NotFound"
import ProductsList from "./components/Products/ProductsList"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { products } from "./data/data.js"
//import NavBar from "./components/nav/nav"



function App() {

  
  const [productos, setProductos] = useState(products)
  
  

  const rutas=([
    {path:'/', element: <Home />},
    {path:'/sobre-nosotros', element: <About />},
    {path:'/productos', element: <ProductsList 
                              productos={productos}
    />},
    {path:'/contacto', element: <Contact />},
    {path:'/*', element: <NotFound />},
  ])

  const router = createBrowserRouter(rutas)
  
  

  return (
    <>
      
        <Header />
        <main>
          <RouterProvider router={router}/>
        </main>
        
    </>
  )
}

export default App
