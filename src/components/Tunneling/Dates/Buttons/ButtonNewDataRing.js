import css from './ButtonNewDataRing.module.css'

const ButtonNewDataRing =(props)=>{
    let newDataRing = () => {
        let action = {type : 'INSERT-RING-DATA', date : props.date}
        props.dispatch(action)
    }
    return (
        <button className={css.plus} onClick={newDataRing}>+</button>
    )
}

export default ButtonNewDataRing;