import Dates from './Dates/Dates'
import css from './Tunneling.module.css'


const Tunneling = (props) => {
  let admin = true; //Начало админки
  let dates = props.allDate.map(el => <Dates    date={el} 
                                                getRingsByDate={props.getRingsByDate} 
                                                checkArrays={props.checkArrays} 
                                                admin={admin}
                                                dispatch={props.dispatch}
                                                getPump={props.getPump}
                                                />)
  return(
        <div>
          <table className={css.toptable}>
            <thead>
              <tr>
                <th>Проходка</th>
                <th colSpan="3">Монтаж</th>
                <th colSpan="2">Нагнетание</th>
              </tr>
              <tr>
                <th>№</th>
                <th>№</th>
                <th>A</th>
                <th>K</th>
                <th>№</th>
                <th>Объём</th>
              </tr>
            </thead>
          </table>
          {dates}
        </div>
  )
}

export default Tunneling;