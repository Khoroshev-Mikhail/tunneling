import React from "react";

const OneRing = (props) => {
    //Ссылки
    let segment = React.createRef();
    let pump = React.createRef();

    //Функции
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
            <td><textarea value={props.id}></textarea></td> {/*Проходка*/}
            <td><textarea value={props.id}></textarea></td> {/*Монтаж*/}
            <td><textarea ref={segment} value={props.segment} onChange={changeSegment}></textarea></td> {/*А сегмент*/}
            <td>{props.segment+7}</td> {/*К Сегмент*/}
            <td>{props.id-2}</td>  {/* № нагнетания */}
            <td><textarea ref={pump} value={PumpingMinusTwo()} onChange={pupmingUpdate}></textarea></td> {/*V нагнетания*/}
            <td><button onClick={newRing}>+</button><button onClick={delRing}>-</button></td> {/*Кнопки*/}
        </tr>
    );
}

export default OneRing;