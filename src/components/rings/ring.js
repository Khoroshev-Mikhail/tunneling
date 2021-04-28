import React from "react";

const ring = (props) => {
    let admin = true;
    let segment = React.createRef();
    let idMontage = React.createRef();
    let idTunneling = React.createRef();
    let pump = React.createRef();
    let changeSegment = () => {
        props.updateRing(idMontage.current.value, segment.current.value)
    }
    let PumpingMinusTwo = () =>{
        return props.getPump(props.id);
    }
    let pupmingUpdate = () => {
       props.updatePump(props.id, pump.current.value)
    }
    let ara = () => {
        alert('ara')
    }
        if(props.checkArrays(props.tunneling, props.date) && props.checkArrays(props.tunneling, props.montage) && admin){
            return (
                <tr>
                    <td><textarea ref={idTunneling} value={props.id}></textarea></td>
                    <td><textarea ref={idMontage} value={props.id}></textarea></td>
                    <td><textarea ref={segment} value={props.segment} onChange={changeSegment}></textarea></td>
                    <td>{props.segment+7}</td>
                    <td><textarea ref={pump} value={PumpingMinusTwo()} onChange={pupmingUpdate}></textarea></td>
                    <td><button onClick={ara}>+</button></td>
                </tr>
            )
        }  else if(props.checkArrays(props.tunneling, props.date) && !props.checkArrays(props.tunneling, props.montage) && admin){
            return (
                <tr>
                    <td><textarea>{props.id}</textarea></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><textarea ref={pump} value={PumpingMinusTwo()}></textarea></td>
                    <td><button>+</button></td>
                </tr>
            )
        } else if (admin) {
            return (
                <tr>
                    <td></td>
                    <td><textarea ref={idMontage} value={props.id}></textarea></td>
                    <td><textarea ref={segment} value={props.segment} onChange={changeSegment}></textarea></td>
                    <td>{props.segment+7}</td>
                    <td></td>
                    <td><button>+</button></td>
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
                    <td>{props.id-2}-{PumpingMinusTwo()}</td>
                    <td><button>+</button></td>
                </tr>
            )
        } else if(props.checkArrays(props.tunneling, props.date) && !props.checkArrays(props.tunneling, props.montage) && !admin){
            return (
                <tr>
                    <td>{props.id}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{props.id-2}-{PumpingMinusTwo()}</td>
                    <td><button>+</button></td>
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
                    <td><button>+</button></td>
                </tr>
            )
        }

    }

export default ring;