function ApplianceButton({ name, putFunction, on }){
  return(
	<div onClick={() => {putFunction()}} className={`${on ? "bg-gradient-to-b from-[#FF3E3E] to-[#FFA337] text-white" : "bg-[#D9D9D9]"} w-full h-16 flex justify-center items-center rounded-lg`}>
	  <h2 className="text-xl font-extrabold">{name}</h2>
	</div>
  )
}
export default ApplianceButton
