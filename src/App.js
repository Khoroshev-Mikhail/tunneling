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
          getPump={props.getPump} 
          insertRing={props.insertRing}
          insertRingData={props.insertRingData}
          deleteRing={props.deleteRing}
          dispatch={props.dispatch}
      />
    </div>
  );
}

export default App;
