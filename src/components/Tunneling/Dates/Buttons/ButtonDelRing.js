import css from './ButtonDelRing.module.css'

const ButtonDelRing = (props) => {
    let delRing = () => {
        props.deleteRing(props.id)
    }

    return(
        <button className={css.minus} onClick={delRing}>-</button>
    )
}

export default ButtonDelRing;