import React, {useState, useEffect} from 'react'

const NuevoHome = () => {
    const [contador, setContador] = useState (0)

    useEffect (() =>{
        document.title = ` has hecho click ${ contador} veces`
    })

    return (
        <>
            <button onClick={() =>setContador (contador + 1) }> Añadir</button>
            <p> El numero de clicks es: {contador}</p>
        </>

    )
}
export default NuevoHome