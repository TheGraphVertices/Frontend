import {useState} from "react"

function ApplianceButton({ name }){
  const [clicked, setClicked] = useState(false)  

  return(
	<div onClick={() => {setClicked(!clicked)}} className={`${clicked ? "bg-red-500" : "bg-slate-500"} h-8 w-8`}>
	  <h2>{name}</h2>
	</div>
  )
}
export default ApplianceButton
