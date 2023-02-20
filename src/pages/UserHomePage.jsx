import RoomTab from '../components/RoomTab';
import Stats from '../components/Stats'
import Landing from '../components/Landing';

function UserHomePage(){
  return(
    <div className='font-body absolute h-full'>
      <RoomTab />
      <Landing />
      <Stats />
    </div>
  )
}
export default UserHomePage
