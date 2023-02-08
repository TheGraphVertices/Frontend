import './App.css';
import RoomTab from './components/RoomTab';
import Stats from './components/Stats'
import Landing from './components/Landing';

function App() {
  return (
    <div className='font-body static'>
      <RoomTab />
      <Landing />
      <Stats />
    </div>
  );
}

export default App;
