import React from "react";

const OneRing = (props) => {
    let segment = React.createRef();
    let pump = React.createRef();
    let changeSegment = () => {
        props.updateRing(props.id, segment.current.value, props.date)
    }
    let PumpingMinusTwo = () =>{
        return props.getPump(props.id);
    }
    let pupmingUpdate = () => {
       props.updatePump(props.id, pump.current.value)
    }
    let newRing = () => {
        props.insertRing(props.id, props.date)
    }
    let delRing = () => {
        props.deleteRing(props.id)
    }
    return(
        <tr>
            <td><textarea value={props.id}></textarea></td>
            <td><textarea value={props.id}></textarea></td>
            <td><textarea ref={segment} value={props.segment} onChange={changeSegment}></textarea></td>
            <td>{props.segment+7}</td>
            <td>{props.id-2}</td>
            <td><textarea ref={pump} value={PumpingMinusTwo()} onChange={pupmingUpdate}></textarea></td>
            <td>
                <button onClick={newRing}>+</button>
                <button onClick={delRing}>-</button>
            </td>
        </tr>
    );
}

export default OneRing;