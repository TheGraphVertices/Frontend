import {useCallback} from "react"
import { useEffect, useState } from "react"

function Temperature({ temperature }){
  const [portionStyle, setPortionStyle] = useState()

  const tempCheck = useCallback(() => {
    if(Math.abs(temperature) <= 15){
      const deg = 180 * (Math.abs(temperature) / 15)
      setPortionStyle({backgroundImage: `linear-gradient(${deg}deg, transparent 50%, white 50%), linear-gradient(0deg, white 50%, transparent 50%)`})
    }
    else if (Math.abs(temperature) > 15){
      const temp = Math.abs(temperature) - 15
      const deg = Math.min(180 * (temp / 15), 180) 
      setPortionStyle({backgroundImage: `linear-gradient(${deg}deg, transparent 50%, ${temperature >= 0 ? `rgb(249 115 22)` : `rgb(59 130 246)`} 50%), linear-gradient(0deg, white 50%, transparent 50%)`})
    }
  }, [temperature])

  useEffect(() => {
    tempCheck()
  }, [tempCheck])

  return(
    <div className="relative w-[65%] max-w-[300px] aspect-square">
      <div className="bg-white w-full h-full rounded-full flex justify-center items-center flex-column text-center shadow-[0px_10px_50px_-12px_rgb(0,0,0,0.3)] absolute z-20">
        <div>
          <h1 className="text-7xl font-extrabold">{temperature}°C</h1>
          <h2 className="text-2xl font-extrabold">Temperature</h2>
        </div>
      </div>
      <div className="w-[110%] h-[110%] rounded-full absolute z-10 -translate-x-[5%] -translate-y-[5%] bg-orange-500" style={portionStyle}></div>
    </div>
  )
}
export default Temperature
