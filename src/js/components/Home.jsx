import React , {useState} from "react";


const Home = () => {
	const [selectColorRed, setSelectColorRed]= useState ('red');
	const [selectColorOrange, setSelectColorOrange]= useState ('orange');
	const [selectColorGreen, setSelectColorGreen]= useState ('green');
	return (
		<div className="container trafic-light">
			<div onClick={setSelectColorRed}></div>
			<div onClick={setSelectColorOrange}></div>
			<div onClick={setSelectColorGreen}></div>
			
		</div>
	)
}
export default Home;



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