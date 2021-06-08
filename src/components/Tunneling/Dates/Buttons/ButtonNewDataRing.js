import { insertRingDateActionCreator } from '../../../../redux/ringsReducer'
import css from './ButtonNewDataRing.module.css'

const ButtonNewDataRing =(props)=>{
    let newDataRing = () => {
        let action = insertRingDateActionCreator(props.date)
        props.dispatch(action)
    }
    return (
        <button className={css.plus} onClick={newDataRing}>+</button>
    )
}

export default ButtonNewDataRing;