import "./products.css"

const Product = ({producto}) => {
  return (
    <>
      
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <span className="category">{producto.categoria}</span>
                  <img src={producto.imagen} alt="-" />
                  <span className="card_price"><span>$</span>{producto.precio}</span>
                </div>
                <div className="card_content">
                  <h2 className="card_title">{producto.nombre}</h2>
                  <div className="card_text">
                    <p>{producto.descripcion}</p>
                  </div>
                </div>
              </div>
            </li>
          
    </>
  )
}

export default Product
