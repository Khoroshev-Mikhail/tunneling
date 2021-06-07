import React from "react";
import ButtonNewRing from "../../Buttons/ButtonNewRing"
import ButtonDelRing from "../../Buttons/ButtonDelRing"
import { getPumpActionCreator, updatePumpActionCreator, updateRingActionCreator } from "../../../../../redux/store";

const OneRing = (props) => {
    //Ссылки
    let segment = React.createRef();
    let pump = React.createRef();

    //Функции
    let changeSegment = () => {
        let action = updateRingActionCreator(props.id, segment.current.value, props.date)
        props.dispatch(action)
    }
    let PumpingMinusTwo = () =>{
        let action = getPumpActionCreator(props.id)
        return props.dispatch(action)
    }
    let pupmingUpdate = () => {
        let action = updatePumpActionCreator(props.id, pump.current.value)
        props.dispatch(action);
    }
    if(props.variable === 1){
        return(
            <tr>
                <td>
                    <ButtonDelRing id={props.id} dispatch={props.dispatch}/>
                    <textarea value={props.id}></textarea>
                </td> {/*Проходка*/}
                <td><textarea value={props.id}></textarea></td> {/*Монтаж*/}
                <td><textarea ref={segment} value={props.segment} onChange={changeSegment}></textarea></td> {/*А сегмент*/}
                <td>{props.segment+7}</td> {/*К Сегмент*/}
                <td>{props.id-2}</td>  {/* № нагнетания */}
                <td>
                    <textarea ref={pump} value={PumpingMinusTwo()} onChange={pupmingUpdate}></textarea>
                    <ButtonNewRing date={props.date} id={props.id} dispatch={props.dispatch}/>
                </td> {/*V нагнетания*/}
            </tr>
        );
    } else if (props.variable === 2){
        return(
            <tr>
                <td><ButtonDelRing id={props.id} dispatch={props.dispatch}/><textarea value={props.id}></textarea></td>
                <td></td>
                <td><textarea ref={segment} value={props.segment} onChange={changeSegment}></textarea></td>
                <td></td>
                <td>{props.id-2}</td>
                <td>
                    <textarea ref={pump} value={PumpingMinusTwo()} onChange={pupmingUpdate}></textarea>
                    <ButtonNewRing date={props.date} id={props.id} dispatch={props.dispatch}/>
                </td>
            </tr>
        );
    } else if (props.variable === 3){
        return (
            <tr>
                <td><ButtonDelRing id={props.id} dispatch={props.dispatch}/><textarea value={props.id}></textarea></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{props.id-2}</td>
                <td>
                    <textarea ref={pump} value={PumpingMinusTwo()} onChange={pupmingUpdate}></textarea>
                    <ButtonNewRing date={props.date} id={props.id} dispatch={props.dispatch}/>
                </td>
            </tr>
        );
    } else if(props.variable === 4){
        return (
            <tr>
                <td><ButtonDelRing id={props.id} dispatch={props.dispatch}/></td>
                <td><textarea value={props.id}></textarea></td>
                <td><textarea ref={segment} value={props.segment} onChange={changeSegment}></textarea></td>
                <td>{props.segment+7}</td>
                <td></td>
                <td>
                    <ButtonNewRing date={props.date} id={props.id} dispatch={props.dispatch}/>
                </td>
            </tr>
        )
    } else if (props.variable === 5){
        return (
            <tr>
                <td>{props.id}</td>
                <td>{props.id}</td>
                <td>{props.segment}</td>
                <td>{props.segment+7}</td>
                <td>{props.id-2}</td>
                <td>{PumpingMinusTwo()}</td>
            </tr>
        )
    } else if (props.variable === 6) {
        return (
            <tr>
                <td>{props.id}</td>
                <td></td>
                <td></td>
                <td></td>
                <td>{props.id-2}</td>
                <td>{PumpingMinusTwo()}</td>
            </tr>
        )
    } else if (props.variable === 7){
        return (
            <tr>
                <td></td>
                <td>{props.id}</td>
                <td>{props.segment}</td>
                <td>{props.segment+7}</td>
                <td></td>
                <td></td>
            </tr>
        )
    }
}

export default OneRing;