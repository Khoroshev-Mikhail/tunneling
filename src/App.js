import './App.css';
import Tunneling from './components/Tunneling/Tunneling';
import Enter from './components/Enter';

function App(props) {
  return ( 
    <div className="container">
      <Tunneling 
          state={props.state}
          allDate={props.allDate}
          getRingsByDate={props.getRingsByDate} 
          checkArrays={props.checkArrays} 
          updateRing={props.updateRing} 
          getPump={props.getPump} 
          updatePump={props.updatePump}
          insertRing={props.insertRing}
          insertRingData={props.insertRingData}
          deleteRing={props.deleteRing}
      />
    </div>
  );
}

export default App;
