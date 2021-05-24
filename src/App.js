import './App.css';
import Tunneling from './components/Tunneling';
import Enter from './components/Enter';

function App(props) {
  return ( 
    /*<Tunneling 
    state={props.state}
    allDate={props.allDate}
    getRingsByDate={props.getRingsByDate} 
    checkArrays={props.checkArrays} 
    updateRing={props.updateRing} 
    getPump={props.getPump} 
    updatePump={props.updatePump}
    insertRing={props.insertRing}
    />*/
    <div className="container">

      <Enter />
    </div>
  );
}

export default App;
