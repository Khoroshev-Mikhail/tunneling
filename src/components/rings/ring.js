import React from "react";

const ring = (props) => {
    let admin = true;
    let segment = React.createRef();
    let changeSegment = () => {
        alert('ara');
    }
        if(props.checkArrays(props.tunneling, props.date) && props.checkArrays(props.tunneling, props.montage) && admin){
            return (
                <tr>
                    <td><textarea>{props.id}</textarea></td>
                    <td><textarea>{props.id}</textarea></td>
                    <td><textarea ref={segment} value={props.segment} onChange={changeSegment}></textarea></td>
                    <td>{props.segment+7}</td>
                    <td><textarea>{props.pumping}</textarea></td>
                </tr>
            )
        }  else if(props.checkArrays(props.tunneling, props.date) && !props.checkArrays(props.tunneling, props.montage) && admin){
            return (
                <tr>
                    <td><textarea>{props.id}</textarea></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><textarea>{props.pumping}</textarea></td>
                </tr>
            )
        } else if (admin) {
            return (
                <tr>
                    <td></td>
                    <td><textarea>{props.id}</textarea></td>
                    <td><textarea>{props.segment}</textarea></td>
                    <td>{props.segment+7}</td>
                    <td></td>
                </tr>
            )
        }
        else if(props.checkArrays(props.tunneling, props.date) && props.checkArrays(props.tunneling, props.montage) && !admin){
            return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.id}</td>
                    <td>{props.segment}</td>
                    <td>{props.segment+7}</td>
                    <td>{props.id-2}-{props.pumping}</td>
                </tr>
            )
        } else if(props.checkArrays(props.tunneling, props.date) && !props.checkArrays(props.tunneling, props.montage) && !admin){
            return (
                <tr>
                    <td>{props.id}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{props.id-2}-{props.pumping}</td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td></td>
                    <td>{props.id}</td>
                    <td>{props.segment}</td>
                    <td>{props.segment+7}</td>
                    <td></td>
                </tr>
            )
        }

    }

export default ring;