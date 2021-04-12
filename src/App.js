import './App.css';
import Ring from './components/rings/ring';

function App(props) {
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
          {rings}
        </thead>
      </table>
    </div>
  );
}

export default App;
