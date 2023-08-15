import imagen from "../../imagenes/Not Found/404-Error-animal-amico.svg"
import "./notFound.css"

const NotFound = () => {
  return (
    <div className="otro-nombre">
      <h2 className="titulo-notFound">¡Ups! Parece que la página que intentas buscar no existe.</h2>
      <img className="imagen-notFound" src={imagen} alt="" />
      
      
    </div>
  )
}

export default NotFound
