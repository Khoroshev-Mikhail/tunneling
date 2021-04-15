import './App.css';
import Ring from './components/rings/Ring';
import Dates from './components/rings/Dates';

function App(props) {
  console.log(props.dates);
  let dates = props.dates.map(el => <Dates date={el}/>)
  let rings = props.state.rings.map(el => <Ring date={el.tunneling} />);
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
