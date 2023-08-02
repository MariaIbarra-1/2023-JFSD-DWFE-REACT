import { useState, useEffect } from "react"
import Product from "./Product"

const ProductsList = ({productos}) => {

  const [filtro, setFiltro] = useState("")
  const [productosFiltrados, setProductosFiltrados] = useState(productos)

  useEffect(() => {
    //por cada vez que se cambie el filtro, realizo el filtro
    const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(filtro))
      setProductosFiltrados(productosFiltrados)
  }, [filtro])
  
  
  
  return (
    <div>
      <div className="main-product">
        <div className=" text-center">
          <label htmlFor="buscador"></label>
          <input className="border-2 w-3/4 p-2 mt-8 placeholder-gray-400 rounded-md" 
                type="search" 
                id="buscador" 
                placeholder="Ingrese producto que desea buscar..." 
                onChange={(e) => setFiltro(e.target.value.toLowerCase())} //registro el filtro
          />
        </div>
        
        <h2 className="titulo-producto">Nuestros Productos</h2>
          <ul className="cards">
            {productosFiltrados.map(producto => (
                <Product key={producto.id} producto={producto} />
            ))}
          </ul>
      </div>
    </div>
  )
}

export default ProductsList
