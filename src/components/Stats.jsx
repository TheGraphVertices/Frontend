import RoomButton from "./RoomButton"
import Temperature from "./Temperature"
import ApplianceButton from "./ApplianceButton"

function Stats(){
  return(
	<section className="px-4 font-body flex items-center flex-col">
	  <div>
		<div>
		  <h2>4387</h2>
		  <h3>Killowats</h3>
		</div>
		<div>
		  <h2>75%</h2>
		  <h3>Clean Energy being used in home</h3>
		</div>
	  </div> 
	  <Temperature />
	  <h2>Rooms</h2>
	  <div>
	    <RoomButton name="Living Room"/>
	  </div>
	  <h2>Appliances</h2>
	  <div>
	    <ApplianceButton name="Heater" />
	  </div>
	</section>
  )
		
}
export default Stats
