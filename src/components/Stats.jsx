import RoomButton from "./RoomButton"
import Temperature from "./Temperature"
import ApplianceButton from "./ApplianceButton"
import { useEffect, useState } from "react"
import { LineChart, XAxis, YAxis, Tooltip, Line, CartesianGrid, Legend } from "recharts"

function Stats({ id }){
	const [response, setResponse] = useState({
		ppms: [0],
		temps: [0],
		datetimes: [""]
	})
	const [graphData, setGraphData] = useState([])


	useEffect(() => {
		const graphDataPrep = () => {
			const dataArr = []
			if(response["datetimes"].length !== 1){
				for(let i = 0; i <= response["ppms"].length - 1; i++){
					const obj = {datetimes: response["datetimes"][i], temps: response["temps"][i]}
					dataArr.push(obj)
				}
			}
			setGraphData(dataArr)
		}

		const getResponse = async () => {
			const url = `https://api.jeremypetch.com/data/${id}/list`
			await fetch(url).then((response) => response.json()).then((data) => {
				if(data != {}){
					setResponse(data)
					graphDataPrep()
				}
			})
		}

		getResponse()
	}, [])

	const putAppliance = async (appliance) => {
		/*
		fetch("", {
			headers:{
				"Content-Type": "application/json"
			},
			method: "PUT",
			body: JSON.stringify({appliance: !response["appliance_on"]})
		})
		*/
	}

	return(
	<section className="absolute top-full z-0">
		<section className="px-4 py-20 font-body flex items-center flex-col justify-center gap-8 h-full w-screen">
			<div className="flex flex-row gap-2">
			<div className="flex items-center flex-col">
				<h2 className="text-7xl font-extrabold text-[#FFA337]">{response["ppms"][response["ppms"].length - 1]}</h2>
				<h3 className="text-2xl font-extrabold text-center">Carbon ppm</h3>
			</div>
			<div className="flex items-center flex-col justify-center">
				<h2 className="text-7xl font-extrabold text-[#8FFF00]">30%</h2>
				<h3 className="text-center text-l font-extrabold">Clean Energy being used in home</h3>
			</div>
			</div>
			<Temperature temperature={response["temps"][0]} />
			<h2 className="text-4xl font-extrabold self-start">Rooms</h2>
			<div className="w-full flex gap-4">
				<RoomButton name="Living Room" clicked={true}/>
				<RoomButton name="Kitchen" clicked={false}/>
			</div>
			<h2 className="text-4xl font-extrabold self-start">Appliances</h2>
			<div className="w-full grid grid-cols-2 gap-4">
				<ApplianceButton name="Heater" putFunction={putAppliance("Heater")} on={response["Heater_on"]}/>
				<ApplianceButton name="Light" putFunction={putAppliance("Light")} on={response["Light_on"]}/>
			</div>
			<div className="w-full h-64">
				<LineChart width={300} height={200} data={graphData}>
					<CartesianGrid />
					<XAxis />
					<YAxis dataKey="temps" />
					<Tooltip />
					<Line dataKey="temps" type="monotone" stroke="#FF00FF"/>
				</LineChart>
			</div>
		</section>
	</section>
	)
}
export default Stats
