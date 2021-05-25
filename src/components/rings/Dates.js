import Ring from './ring';


const dates = (props) => {
    let ringsOnDate = props.getRingsByDate([props.date[0],props.date[1],props.date[2]]).map(el => <Ring id={el.id}  
                                                                                                        segment={el.segment}
                                                                                                        tunneling={el.tunneling}
                                                                                                        montage={el.montage}
                                                                                                        pumping={el.pumping}
                                                                                                        date={props.date}
                                                                                                        checkArrays={props.checkArrays}
                                                                                                        updateRing={props.updateRing}
                                                                                                        getPump={props.getPump}
                                                                                                        updatePump={props.updatePump}
                                                                                                        insertRing={props.insertRing}
    />);
    
    let newDataRing = () => {
        props.insertRingData(props.date)
    }
    return(
        <table className="top-date">
            <tr>
                <td colSpan="7">{props.date[0]}.{props.date[1]} смена {props.date[2]} <button onClick={newDataRing}>+</button></td>
            </tr>
            {ringsOnDate}
        </table>
    )
}

export default dates;