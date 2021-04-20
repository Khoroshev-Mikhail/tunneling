import Ring from './Ring';


const dates = (props) => {
    //let RingsOnDate = props.state.rings.map(el => <Ring date={el.tunneling} />);
    
    return(
        <tr>
            <td colSpan="5" style={{textAlign: 'center'}}>{props.date[0]}     {props.date[1]}     {props.date[2]}</td>
        </tr>
    )
}

export default dates;