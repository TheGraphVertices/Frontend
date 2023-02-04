import RoomButton from "./RoomButton"
import Temperature from "./Temperature"

function Stats(){
  return(
	<section className="px-4">
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
	  <RoomButton name="Living Room"/>
	</section>
  )
		
}
export default Stats
