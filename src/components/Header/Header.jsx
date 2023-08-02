import "./header.css"
import logo from "../../imagenes/logo/logo-2.png"

const Header = () => {
  return (
    <>
      <header className="main-header">
        <label htmlFor="btn-nav" className="btn-nav"><i className="fas fa-bars"></i></label>
        <input type="checkbox" id="btn-nav" />
        <img className="logo" src={logo} alt="logo" />
        <nav>
            <ul className="navigation">
              <li><a href="/">Inicio</a></li>
              <li><a href="/productos">Productos</a></li>
              <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
        </nav>
        
      </header>
    </>
  )
}

export default Header
