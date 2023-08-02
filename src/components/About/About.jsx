import imagenAtencion from "../../imagenes/About/Atencion-Cliente-Portada_750x500.jpg"
import imagenAtencionPersonal from "../../imagenes/About/atencion-personalizada.jpg"

const About = () => {
  return (
    <div className="m-7">
      <h2 className="font-black text-3xl text-center text-violet-900 mt-8 mb-8">Sobre Misiotrónica</h2>
      <div className="md:flex">
        <div className="md:w-1/2 mx-5 flex flex-col justify-center">
            <img className="" src={imagenAtencion} alt="" />
        </div>
        <div className="md:w-1/2 mx-5 my-5">
            <h3 className=" text-2xl text-[#776099] italic">Excelencia y calidad</h3>
            <p className="text-lg mb-3">
                Ubicada en el corazon de la ciudad de de Misiones, <b>Misiotrónica</b> inova en el mercado de la electronica
                una amplia variedad de productos. Fundada en 2021, Misiotrónica ya destaca en 
                la ciudad y conquista nuevos clietes diariamente, gracias nuestra atención de calidad.
            </p>
            <p className="text-lg mb-3 italic">
                Nuestra misión es: <b>"Brindar una mejor atención, ampliando nuestros servicios tanto a empresas, 
                consorcios o particulares, a través de nuestros profesionales capacitados"</b>
            </p>
            <p className="text-lg mb-3">
                Ofrecemos profesionales experimentados que estan dispuestos a responder consultas y guiar a escoger
                la mejor solución que el cliente necesite. El atendimiento posee un padrón de excelencia y agilidad,
                garantizando calidad y sastifación de nuestros clientes.
            </p>
            <p className="text-lg mb-3">
            A través de nuestra tienda online, buscamos que el cliente pueda encontrar su producto de una manera más 
            sencilla, sin necesidad de moverse de su casa y con solamente un click.
            </p>
        </div>
        
      </div>

      <div className="md:flex my-8">
        
        <div className="md:w-1/2 mx-5 my-5">
            <h3 className=" text-2xl text-[#776099] italic">Atención personalizada</h3>
            <p className="text-lg mb-3">
                En <b>Misiotrónica</b> implementamos nuevas vías de contacto para que el usuario pueda 
                asesorarse y consultar sus inquietudes antes de efectuar una compra. Nuestro vinculo con 
                los clientes es nuestro pilar fundamental.
            </p>
            <p className="text-lg mb-3">
                Actualmente contamos con un sistema de comunicación a traves de la página web. Tambien ofrecemos
                la posibilidad de una atención mas personalizada en nuestro establecimiento.
            </p>
            <p className="text-lg mb-3">
            La atención personalizada responde a las necesidades con las que se acerca cada persona.
            </p>
        </div>
        <div className="md:w-1/2 mx-5 flex flex-col justify-center">
            <img className="" src={imagenAtencionPersonal} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default About
