import React from "react";
import OneRing from './OneRing/OneRing'

const Rings = (props) => {
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
            //getPump={props.getPump}
        />
    )
}

export default Rings;