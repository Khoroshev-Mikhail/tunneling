const dates = (props) => {
    return(
        <tr>
            <td colSpan="5" style={{textAlign: 'center'}}>{props.date[0]}     {props.date[1]}</td>
        </tr>
    )
}

export default dates;