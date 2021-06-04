import { insertRingActionCreator } from '../../../../redux/store'
import css from './ButtonNewRing.module.css'

const ButtonNewRing = (props) =>{
    let newRing = () => {
        let action = insertRingActionCreator(props.id, props.date)
        props.dispatch(action)
    }
    return (
        <button className={css.pluss} onClick={newRing}>+</button>
    )
}

export default ButtonNewRing