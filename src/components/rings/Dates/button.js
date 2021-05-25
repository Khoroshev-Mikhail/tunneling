const Button =(props)=>{
    let newDataRing = () => {
        props.insertRingData(props.date)
    }
    return (
        <button onClick={newDataRing}>+</button>
    )
}

export default Button;