import Ring from './Ring';


const dates = (props) => {
    let ringsOnDate = props.getRingsByDate([props.date[0],props.date[1],props.date[2]]).map(el => <Ring id={el.id} 
                                                                                                        tunneling={el.tunneling} 
                                                                                                        segment={el.segment} 
                                                                                                        monthT={el.monthT}
                                                                                                        monthM={el.monthM}
                                                                                                        montage={el.montage}
                                                                                                        shiftT={el.shiftT}
                                                                                                        shiftM={el.shiftM}  
                                                                                                        pumping={el.pumping}
                                                                                                        date={props.date}
                                                                                                        />);
    
    return(
        <div>
            <table className="ara">
                <tr>
                    <td colSpan="5" style={{textAlign: 'center'}}>{props.date[0]}.{props.date[1]} смена:{props.date[2]}</td>
                </tr>
                {ringsOnDate}
            </table>
        </div>
    )
}

export default dates;