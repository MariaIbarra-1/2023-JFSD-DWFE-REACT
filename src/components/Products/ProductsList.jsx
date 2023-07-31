import Product from "./Product"

const ProductsList = ({productos}) => {

    
  return (
    <div>
      <div className="main-product">
          <ul className="cards">
            {productos.map(producto => (
                <Product key={producto.id} producto={producto} />
            ))}
          </ul>
      </div>
    </div>
  )
}

export default ProductsList
