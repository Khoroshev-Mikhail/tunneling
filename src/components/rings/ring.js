const ring = (props) => {
    //Разбить на монтаж или проходку
    let ckeckMontage= () => {
        let date = props.date;
        let dateM = [props.monthM, props.montage, props.shiftM]; 
        if(dateM = date){
            return props.id;
        }
    }
    //Разбить на монтаж или проходку
    let ckeckTunneling= () => {
        let date = props.date;
        let dateT = [props.monthT, props.tunneling, props.shiftT];
        if(dateT = date){
            return props.id;
        }
    }
    let tunneling = ckeckTunneling();
    let montage = ckeckMontage();
    return (
        <tr>
            <td>{tunneling}</td>
            <td>{montage}</td>
            <td>{props.segment}</td>
            <td>{(+props.segment+7)}</td>
            <td>{props.pumping}</td>
        </tr>
    )
}

export default ring;