import Rings from './Rings/Rings';
import Button from './Buttons/ButtonNewDataRing'
import css from './Dates.module.css'


const dates = (props) => {
    let ringsOnDate = props.getRingsByDate([props.date[0],props.date[1],props.date[2]], props.state).map(el => <Rings id={el.id}  
                                                                                                        segment={el.segment}
                                                                                                        tunneling={el.tunneling}
                                                                                                        montage={el.montage}
                                                                                                        pumping={el.pumping}
                                                                                                        date={props.date}
                                                                                                        checkArrays={props.checkArrays}
                                                                                                        admin={props.admin}
                                                                                                        dispatch={props.dispatch}
                                                                                                        //getPump={props.getPump}
    />);
    let button = '';
    if(props.admin){
        button = <Button date={props.date} dispatch={props.dispatch}/>
    }
    
    return(
        <table className={css.topdate}>
            <tr>
                <td colSpan="6">{props.date[0]}.{props.date[1]} смена {props.date[2]} {button}</td>
            </tr>
            {ringsOnDate}
        </table>
    )
}

export default dates;