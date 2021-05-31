import css from './ButtonNewRing.module.css'

const ButtonNewRing = (props) =>{
    let newRing = () => {
        props.insertRing(props.id, props.date)
    }
    return (
        <button className={css.pluss} onClick={newRing}>+</button>
    )
}

export default ButtonNewRing