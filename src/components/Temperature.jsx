function Temperature(){
  const portion = Math.round((10 / 30) * 100)

  const portionStyle = {
    clipPath: `polygon(0% 0%, 0% 50%, 50% 50%, ${portion}% 0%)`,
  }

  return(
    <div className="relative w-[65%] aspect-square">
      <div className="bg-white w-full h-full rounded-full flex justify-center items-center flex-column text-center shadow-[0px_10px_50px_-12px_rgb(0,0,0,0.3)] absolute z-20">
        <div>
          <h1 className="text-7xl font-extrabold">12°C</h1>
          <h2 className="text-2xl font-extrabold">Temperature</h2>
        </div>
      </div>	
      <div className="w-[110%] h-[110%] rounded-full absolute z-10 -translate-x-[5%] -translate-y-[5%] bg-orange-500" style={portionStyle}></div>
    </div>
  )
}
export default Temperature
