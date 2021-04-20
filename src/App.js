import './App.css';
import Dates from './components/rings/Dates';

function App(props) {
  let dates = props.dates.map(el => <Dates date={el} />)
  console.log(props.getRingsByDate([3, 11, 1]))
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Проходка</th>
            <th>Монтаж</th>
            <th>A</th>
            <th>K</th>
            <th>Нагнетание</th>
          </tr>
          {dates}
        </thead>
      </table>
    </div>
  );
}

export default App;
