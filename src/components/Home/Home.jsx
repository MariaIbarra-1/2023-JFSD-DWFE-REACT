import "./home.css"
import imagenHome from "../../imagenes/Home/electronic-image.jpg"
const Home = () => {
  return (
    <>
      <div className="home-content">
       <img className="home-image" src={imagenHome} alt="" />
       <h1 className="home-title">Bienvenido a Misiotrónica</h1>
       <a href="/productos" className="btn-shop slide-from-left animated fade-in-up delay-3">Comprar Ahora</a>
      </div>

      <h2 className="font-black text-3xl text-center text-violet-900 mt-8 mb-8">Nuestra Ubicación</h2>
      <p className="text-lg mb-3 text-center">Nuestro estableciomiento está ubicado en el corazon de la ciudad</p>
      <div className="mapa-contenido">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1252.7398822420892!2d-55.89513904475764!3d-27.366861402074967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1691006004788!5m2!1ses!2sar"
          width="100%" 
          height="350" 
          style={{border:0 }}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
     
    </>
  )
}

export default Home
