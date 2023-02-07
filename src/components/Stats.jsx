import RoomButton from "./RoomButton"
import Temperature from "./Temperature"
import ApplianceButton from "./ApplianceButton"

function Stats(){
  return(
	<section className="px-4 py-20 font-body flex items-center flex-col justify-center gap-8 h-full">
	  <div className="flex flex-row">
		<div className="flex items-center flex-col">
		  <h2 className="text-7xl font-extrabold text-[#FFA337]">4387</h2>
		  <h3 className="text-4xl font-extrabold">Killowats</h3>
		</div>
		<div className="flex items-center flex-col justify-center">
		  <h2 className="text-7xl font-extrabold text-[#8FFF00]">75%</h2>
		  <h3 className="text-center text-l font-extrabold">Clean Energy being used in home</h3>
		</div>
	  </div> 
	  <Temperature />
	  <h2 className="text-4xl font-extrabold self-start">Rooms</h2>
	  <div className="w-full flex gap-4">
	    <RoomButton name="Living Room"/>
	    <RoomButton name="Kitchen"/>
	  </div>
	  <h2 className="text-4xl font-extrabold self-start">Appliances</h2>
	  <div className="w-full grid grid-cols-2 gap-4">
	    <ApplianceButton name="Heater"/>
	    <ApplianceButton name="TV"/>
	    <ApplianceButton name="Light"/>
	  </div>
	</section>
  )
		
}
export default Stats
