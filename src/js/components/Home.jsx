import React, { useState } from "react";
// componente principal
const Home = () => {
	// estado para el color activo (el que esta brillando)
  const [colorActivo, setColorActivo] = useState('');
    // estado para la lista de colores del semaforo
  const [colores, setColores] = useState(['rojo','amarillo','verde']);
	// funcion flecha para activar un color especifico
  const activarColor = (color) => {
    setColorActivo(color); // llamo a la funcion para actualizar el color activo
  };
  	// funcion para alterne de colores
  const alternarColores = () => {
	// busca el indice de color activo y pasa al siguiernte con indexOf detecta que indice tiene y le añadimos +1 para pasar al siguiente
	const siguienteColor = colores[(colores.indexOf(colorActivo)+1)% colores.length];//con este ultimo cuando llega al final, suma indice 2 +1 y lo divide colores.length que es 3 = 0, y vuelve al principio
	setColorActivo(siguienteColor);
  };
  // añado funcion para añadir color purpura
  const agregarColorPurpura = () => {
	if (!colores.includes('purpura')){// verifica que el purpura no esta
		setColores([...colores, 'purpura'])// lo añade a la lista de colores
	}
  }
// agrago variables de los colores con dos clases cada una luz y el color
  let claseRoja = 'luz roja';
  let claseAmarilla = 'luz amarilla';
  let claseVerde = 'luz verde';
  let clasePurpura = 'luz purpura'
// condicionales para añadir la clase brillo al color activo
  if (colorActivo === 'rojo') {
    claseRoja += ' brillo';
  } else if (colorActivo === 'amarillo') {
    claseAmarilla += ' brillo';
  } else if (colorActivo === 'verde') {
    claseVerde += ' brillo';
  } else if (colorActivo === 'purpura') {
	clasePurpura += ' brillo';
  }

  return (
    <div className="contenedor semaforo">
      <div className="barra"></div> {/*le coloco esta barra central arriba*/} 
      <div
        className={claseRoja}
        onClick={() => activarColor('rojo')}>
      </div>
      <div
        className={claseAmarilla}
        onClick={() => activarColor('amarillo')}>
      </div>
      <div
        className={claseVerde}
        onClick={() => activarColor('verde')}>
      </div>
	  {colores.includes('purpura')&& (
		<div className={clasePurpura} 
			onClick={() => activarColor('purpura')}>
		</div>
	  )}
	  <button onClick={alternarColores}>Alternar Colores</button>
	  <button onClick={agregarColorPurpura}>Añadir Color Púrpura</button>
    </div>
  );
};

export default Home;

