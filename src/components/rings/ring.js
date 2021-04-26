const ring = (props) => {
    console.log(props.date + '-' + props.tunneling + "-" + props.montage)
            return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.id}</td>
                    <td>{props.segment}</td>
                    <td>{props.segment+7}</td>
                    <td>{props.pumping}</td>
                </tr>
            )

    }

export default ring;