function RoomButton({ name, clicked }){
  return(
	<div className={`w-1/2 h-20 ${clicked ? "bg-gradient-to-b from-[#FF3E3E] to-[#FFA337] text-white" : "bg-[#D9D9D9]"} rounded-lg flex items-center justify-center `}>
	  <h2 className="text-xl font-extrabold">{name}</h2>
	</div>
  )
}
export default RoomButton
