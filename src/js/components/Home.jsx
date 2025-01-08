import React, { useState } from "react";

const Home = () => {
  const [colorActivo, setColorActivo] = useState('');

  const activarColor = (color) => {
    setColorActivo(color);
  };

  let claseRoja = 'luz roja';
  let claseAmarilla = 'luz amarilla';
  let claseVerde = 'luz verde';

  if (colorActivo === 'rojo') {
    claseRoja += ' brillo';
  } else if (colorActivo === 'amarillo') {
    claseAmarilla += ' brillo';
  } else if (colorActivo === 'verde') {
    claseVerde += ' brillo';
  }

  return (
    <div className="contenedor semaforo">
      <div className="barra"></div> 
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
    </div>
  );
};

export default Home;

/*import React , {useState} from "react";


const Home = () => {
	const [colorActivo, setColorActivo]= useState('');
	const activarColor = (color) => {setColorActivo(color);
	}
	let claseRoja = 'luz roja';
	let claseAmarilla = 'luz amarilla';
	let claseVerde = 'luz verde';
	if (colorActivo === 'rojo') {
		claseRoja += ' brillo';
	} else if (colorActivo === 'amarillo') {
		claseAmarilla += ' brillo';
	} else if (colorActivo === 'verde') {
		claseVerde += ' brillo';
	}
	return (
		<div className="contenedor semaforo">
			<div className={claseRoja} onClick={() => activarColor('rojo')}>
			</div>
			<div className={claseAmarilla} onClick={() => activarColor('amarillo')}>
			</div>
			<div className={claseVerde} onClick={() => activarColor('verde')}>
			</div>
		</div>
		
	)
}
export default Home;*/



//create your first component
/*const Home = () => {
	const [selectedColor, setSelectedColor] = useState("green");
	return (
		<div className="trafic-light">
			<div
				onClick={() => setSelectedColor("red")}
				className={
					"light red " + (selectedColor === "red" ? "glow" : "")
				}></div>
			;
			<div
				onClick={() => setSelectedColor("yellow")}
				className={
					"light yellow" +
					(selectedColor === "yellow" ? " yellow glow" : "")
				}></div>{" "}
			;
			<div
				onClick={() => setSelectedColor("green")}
				className={
					"light green" +
					(selectedColor === "green" ? " green glow" : "")
				}></div>
		</div>
	);
};

export default Home;*/