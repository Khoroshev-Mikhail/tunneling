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
    
        if(props.checkArrays(props.tunneling, props.date) && props.checkArrays(props.tunneling, props.montage) && props.admin){
            return (
                <OneRing 
                    variable={1}
                    id={props.id}
                    segment={props.segment}
                    date={props.date}
                    dispatch={props.dispatch}
                />
            )
        }  else if(props.checkArrays(props.tunneling, props.date) && !props.checkArrays(props.tunneling, props.montage) && !props.segment && props.admin){
            return (
                <OneRing 
                    variable={2}
                    id={props.id}
                    segment={props.segment}
                    date={props.date}
                    dispatch={props.dispatch}
                />
            )
        }  else if(props.checkArrays(props.tunneling, props.date) && !props.checkArrays(props.tunneling, props.montage) && props.admin){
            return (
                <OneRing 
                    variable={3}
                    id={props.id}
                    segment={props.segment}
                    date={props.date}
                    dispatch={props.dispatch}
                />
            )
        } else if (props.admin) {
            return (
                <OneRing 
                    variable={4}
                    id={props.id}
                    segment={props.segment}
                    date={props.date}
                    dispatch={props.dispatch}
                />
            )
        }
        else if(props.checkArrays(props.tunneling, props.date) && props.checkArrays(props.tunneling, props.montage) && !props.admin){
            return (
                <OneRing 
                    variable={5}
                    id={props.id}
                    segment={props.segment}
                    date={props.date}
                    dispatch={props.dispatch}
                />
            )
        } else if(props.checkArrays(props.tunneling, props.date) && !props.checkArrays(props.tunneling, props.montage) && !props.admin){
            return (
                <OneRing 
                    variable={6}
                    id={props.id}
                    segment={props.segment}
                    date={props.date}
                    dispatch={props.dispatch}
                />
            )
        } else {
            return (
                <OneRing 
                    variable={7}
                    id={props.id}
                    segment={props.segment}
                    date={props.date}
                    dispatch={props.dispatch}
                />
            )
        }

    }

export default Rings;