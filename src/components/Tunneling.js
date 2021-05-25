import Dates from './rings/Dates'
const Tunneling = (props) => {
    let dates = props.allDate.map(el => <Dates date={el} 
        getRingsByDate={props.getRingsByDate} 
        checkArrays={props.checkArrays} 
        updateRing={props.updateRing}
        getPump={props.getPump}
        updatePump={props.updatePump}
        insertRing={props.insertRing}
        insertRingData={props.insertRingData}
        />)
    return(
          <div>
            <table className="top-table">
              <thead>
                <tr>
                  <th>Проходка</th>
                  <th colSpan="3">Монтаж</th>
                  <th colSpan="2">Нагнетание</th>
                  <th rowSpan="2">Админка</th>
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