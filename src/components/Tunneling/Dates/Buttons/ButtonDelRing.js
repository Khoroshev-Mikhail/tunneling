import css from './ButtonDelRing.module.css'

const ButtonDelRing = (props) => {
    let delRing = () => {
        let action = {type : 'DELETE-RING', id : props.id}
        props.dispatch(action)
    }

    return(
        <button className={css.minus} onClick={delRing}>-</button>
    )
}

export default ButtonDelRing;