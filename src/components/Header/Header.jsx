import "./header.css"

const Header = () => {
  return (
    <>
      <header className="main-header">
        <label htmlFor="btn-nav" className="btn-nav"><i className="fas fa-bars"></i></label>
        <input type="checkbox" id="btn-nav" />
        
        <nav>
            <ul className="navigation">
              <li><a href="/">Inicio</a></li>
              <li><a href="/productos">Productos</a></li>
              <li><a href="">Sobre Nosotros</a></li>
              <li><a href="">Contacto</a></li>
            </ul>
        </nav>
        
</header>
    </>
  )
}

export default Header
