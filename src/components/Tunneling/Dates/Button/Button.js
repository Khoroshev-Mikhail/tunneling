import css from './button.module.css'

const Button =(props)=>{
    let newDataRing = () => {
        props.insertRingData(props.date)
    }
    return (
        <button className={css.plus} onClick={newDataRing}>+</button>
    )
}

export default Button;