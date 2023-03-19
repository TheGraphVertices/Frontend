import RoomTab from '../components/RoomTab';
import Stats from '../components/Stats'
import Landing from '../components/Landing';
import { useLocation } from 'react-router-dom';

function UserHomePage(){
  const location = useLocation()

  return(
    <div className='font-body absolute h-full w-screen'>
      <RoomTab />
      <Landing />
      <Stats id={location.state.uid} />
    </div>
  )
}
export default UserHomePage
