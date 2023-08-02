import { useState, useEffect } from "react"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import NotFound from "./components/NotFound/NotFound"
import ProductsList from "./components/Products/ProductsList"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { products } from "./data/data.js"
//import NavBar from "./components/nav/nav"


const rutas=([
  {path:'/', element: <Home />},
  //{path:'/acerca', element: <About />},
  {path:'/tienda', element: <ProductsList />},
  //{path:'/contacto', element: <Contact />},
  {path:'/*', element: <NotFound />},
])


function App() {

  
  const [productos, setProductos] = useState(products)
  
  

  const rutas=([
    {path:'/', element: <Home />},
    //{path:'/acerca', element: <About />},
    {path:'/productos', element: <ProductsList 
                              productos={productos}
    />},
    //{path:'/contacto', element: <Contact />},
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
