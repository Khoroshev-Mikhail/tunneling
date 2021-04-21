const ring = (props) => {
    //Разбить на монтаж или проходку
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.tunneling}</td>
            <td>{props.segment}</td>
            <td>{(+props.segment+7)}</td>
            <td>{props.pumping}</td>
        </tr>
    )
}

export default ring;