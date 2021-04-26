import './App.css';
import Dates from './components/rings/Dates';

function App(props) {
  let dates = props.allDate.map(el => <Dates date={el} getRingsByDate={props.getRingsByDate}/>)
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
          </tr>
        </thead>
      </table>
      {dates}
    </div>
  );
}

export default App;
