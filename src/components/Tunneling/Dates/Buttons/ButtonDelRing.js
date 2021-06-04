import css from './ButtonDelRing.module.css'
import {deleteRingActionCreator} from '../../../../redux/store'

const ButtonDelRing = (props) => {
    let delRing = () => {
        let action = deleteRingActionCreator(props.id)
        props.dispatch(action)
    }

    return(
        <button className={css.minus} onClick={delRing}>-</button>
    )
}

export default ButtonDelRing;