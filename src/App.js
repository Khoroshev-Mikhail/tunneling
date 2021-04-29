import './App.css';
import Dates from './components/rings/Dates';

function App(props) {
  let dates = props.allDate.map(el => <Dates date={el} 
    getRingsByDate={props.getRingsByDate} 
    checkArrays={props.checkArrays} 
    updateRing={props.updateRing}
    getPump={props.getPump}
    updatePump={props.updatePump}
    insertRing={props.insertRing}
    />)
  return (
    <div className="container">
      <table className="ara">
        <thead>
          <tr>
            <th>Проходка</th>
            <th>Монтаж</th>
            <th>A</th>
            <th>K</th>
            <th>Нагнетание</th>
            <th></th>
          </tr>
        </thead>
      </table>
      {dates}
    </div>
  );
}

export default App;
