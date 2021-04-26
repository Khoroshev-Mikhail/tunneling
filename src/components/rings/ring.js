const ring = (props) => {
        if(props.tunneling == props.date && props.montage == props.date){
            return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.id}</td>
                    <td>{props.segment}</td>
                    <td>{props.segment+7}</td>
                    <td>{props.pumping}</td>
                </tr>
            )
        }else if(props.tunneling == props.date && props.montage != props.date){
            return (
                <tr>
                    <td>{props.id}</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>{props.pumping}</td>
                </tr>
            )
        }else if(props.tunneling != props.date && props.montage == props.date){
            return (
                <tr>
                    <td>-</td>
                    <td>{props.id}</td>
                    <td>{props.segment}</td>
                    <td>{props.segment+7}</td>
                    <td>-</td>
                </tr>
            )
        }
    }

export default ring;