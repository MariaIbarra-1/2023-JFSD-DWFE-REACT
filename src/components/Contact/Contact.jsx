import { useState } from "react"
import Error from "./Error"
import imagenResp from "../../imagenes/Contact/Sent-Message.svg"

const Contact = () => {

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [consulta, setConsulta] = useState("")

  const [error, setError] = useState(false)
  const [respuesta, setRespuesta] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    //Valido campos
    if ([nombre, email, consulta].includes('')){
        setError(true)
        setRespuesta(false)
        return;
      }
      setError(false)
      //Muestro respuesta
      setRespuesta(true)
    
    //Reinicio el form
    setNombre('')
    setEmail('')
    setConsulta('')
  }

  return (
    <div className="md:flex">
      <div className="md:w-1/2 mx-5">
        <h2 className="font-black text-3xl text-center text-violet-900 mt-8 mb-8"> Contactanos</h2>
      
        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
            {error && 
                <Error> 
                    <p>Todos los campos son obligatorios</p> 
                </Error>}
            <div className="mb-5">
                <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">
                Nombre
                </label>
                <input 
                id="nombre"
                type="text"
                placeholder="Ingrese su nombre"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={nombre}
                onChange={ (e) => setNombre(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                Email
                </label>
                <input 
                id="email"
                type="email"
                placeholder="Ingrese su email"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="consulta" className="block text-gray-700 uppercase font-bold">
                Consulta
                </label>
                <textarea 
                    className="border-2 w-full h-48 p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Ingrse su consulta..."
                    id="consulta"
                    value={consulta}
                    onChange={ (e) => setConsulta(e.target.value)}
                />
            </div>

            <input
                type="submit"
                className="bg-violet-700 w-full p-3 text-white uppercase font-bold hover:bg-rose-500 cursor-pointer transition-all rounded-xl"
                value= "Enviar"
            />
            </form>
        </div>
        {respuesta && (
        <div className="md:w-1/2 mx-5 text-center">
                <img className=" mt-4" src={imagenResp} alt="" />
                <h2 className="font-black text-2xl text-center text-violet-900"> Gracias por su consulta.</h2>
                <h2 className="font-black text-2xl text-center text-violet-900 mb-8"> Pronto nos pondremos en contacto.</h2>
                
        </div>)}
    </div>
  )
}

export default Contact
