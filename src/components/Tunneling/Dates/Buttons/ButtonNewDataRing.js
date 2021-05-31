import css from './ButtonNewDataRing.module.css'

const ButtonNewDataRing =(props)=>{
    let newDataRing = () => {
        props.insertRingData(props.date)
    }
    return (
        <button className={css.plus} onClick={newDataRing}>+</button>
    )
}

export default ButtonNewDataRing;