import RoomButton from "./RoomButton"
import Temperature from "./Temperature"
import ApplianceButton from "./ApplianceButton"
import { useEffect, useState } from "react"
import { LineChart, XAxis, YAxis, Tooltip, Line, CartesianGrid, ResponsiveContainer } from "recharts"

function Stats({ id }){
	const [response, setResponse] = useState({
		ppms: [0],
		temps: [0],
		datetimes: [""]
	})
	const [graphData, setGraphData] = useState([])

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const getEnergyData = async () => {
		/*
		* This should work but the api on is a bit broke
		const response = await fetch("https://api.bmreports.com/BRMS/FUELINSTHHCUR/v1?APIKey=p2tqjj15j3w82zz&ServiceType=csv")
		console.log(response)
		*/
	}

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
			const response = await fetch(url)
			if(response.status === 400){
				return
			}
			else{
				const body = await response.json()
				setResponse(body)
				graphDataPrep()
			}
		}

		getEnergyData()
		getResponse()
	}, [id, response])

	const putAppliance = async (appliance) => {
		/*
		const obj = {
			uid: id,
			appliance_type: appliance,
			on_off: !response["appliance"][response["appliance"].length - 1]
		}

		fetch("https://api.jeremypetch.com/user/appliance", {
			headers:{
				"Content-Type": "application/json"
			},
			method: "PUT",
			body: JSON.stringify(obj)
		})
		*/
	}

	return(
		<section className="absolute top-full z-0 w-screen md:absolute md:top-[20%] md:flex md:justify-center md:w-1/2 md:left-1/2 md:-translate-x-1/2">
			<section className="px-4 py-20 font-body flex items-center flex-col justify-center gap-8 h-full w-screen md:bg-white md:rounded-lg">
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
				<Temperature temperature={response["temps"][response["temps"].length - 1]} />
				<h2 className="text-4xl font-extrabold self-start">Rooms</h2>
				<div className="w-full flex gap-4">
					<RoomButton name="Living Room" clicked={true}/>
					<RoomButton name="Kitchen" clicked={false}/>
				</div>
				<h2 className="text-4xl font-extrabold self-start">Appliances</h2>
				<div className="w-full grid grid-cols-2 gap-4">
					<ApplianceButton name="Heater" putFunction={putAppliance("Heater")} on={response["boiler"]}/>
					<ApplianceButton name="Light" putFunction={putAppliance("Light")} on={response["light"]}/>
				</div>
				<div className="w-full h-64">
					<ResponsiveContainer width="100%" height="100%">
						<LineChart data={graphData}>
							<CartesianGrid />
							<XAxis />
							<YAxis dataKey="temps" />
							<Tooltip />
							<Line dataKey="temps" type="monotone" stroke="#FF00FF"/>
						</LineChart>
					</ResponsiveContainer>
				</div>
			</section>
		</section>
	)
}
export default Stats
