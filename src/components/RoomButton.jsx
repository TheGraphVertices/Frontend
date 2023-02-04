import { useState } from "react"

function RoomButton({ name }){
  const [clicked, setClicked] = useState(false)

  return(
	  <div onClick={() => setClicked(!clicked)} className={`w-10 h-10 ${clicked ? "bg-red-500" : "bg-blue-500"}`}>
	  <h2>{name}</h2>
	</div>
  )
}
export default RoomButton
