import {useState} from "react"

function ApplianceButton({ name }){
  const [clicked, setClicked] = useState(false)  

  return(
	<div onClick={() => {setClicked(!clicked)}} className={`${clicked ? "bg-gradient-to-b from-[#FF3E3E] to-[#FFA337] text-white" : "bg-[#D9D9D9]"} w-full h-16 flex justify-center items-center rounded-lg`}>
	  <h2 className="text-xl font-extrabold">{name}</h2>
	</div>
  )
}
export default ApplianceButton
