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
    
    return(
        <div>
            <table className="ara">
                <tr>
                    <td colSpan="6" style={{textAlign: 'center', backgroundColor: 'yellow'}}>{props.date[0]}.{props.date[1]} смена {props.date[2]}</td>
                </tr>
                {ringsOnDate}
            </table>
        </div>
    )
}

export default dates;