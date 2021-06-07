import React from "react";
import OneRing from './OneRing/OneRing'
import ButtonNewRing from "../Buttons/ButtonNewRing"
import ButtonDelRing from "../Buttons/ButtonDelRing"
import { getPumpActionCreator, updatePumpActionCreator, updateRingActionCreator } from "../../../../redux/store";

const Rings = (props) => {
    let segment = React.createRef();
    let pump = React.createRef();

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
    let variable;

    //В зависимости от условия выдаём строку с данными кольца
    if(props.checkArrays(props.tunneling, props.date) && props.checkArrays(props.tunneling, props.montage) && props.admin){
        variable = 1;
    }  else if(props.checkArrays(props.tunneling, props.date) && !props.checkArrays(props.tunneling, props.montage) && !props.segment && props.admin){
        variable = 2;
    }  else if(props.checkArrays(props.tunneling, props.date) && !props.checkArrays(props.tunneling, props.montage) && props.admin){
        variable = 3;
    } else if (props.admin) {
        variable = 4;
    }
    else if(props.checkArrays(props.tunneling, props.date) && props.checkArrays(props.tunneling, props.montage) && !props.admin){
        variable = 5
    } else if(props.checkArrays(props.tunneling, props.date) && !props.checkArrays(props.tunneling, props.montage) && !props.admin){
        variable = 6;
    } else {
        variable = 7;
    }

    return (
        <OneRing 
            variable={variable}
            id={props.id}
            segment={props.segment}
            date={props.date}
            dispatch={props.dispatch}
        />
    )
}

export default Rings;