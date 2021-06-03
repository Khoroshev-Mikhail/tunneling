import css from './ButtonNewRing.module.css'

const ButtonNewRing = (props) =>{
    let newRing = () => {
        let action = {type : 'INSERT-RING', date : props.date, id : props.id}
        props.dispatch(action)
    }
    return (
        <button className={css.pluss} onClick={newRing}>+</button>
    )
}

export default ButtonNewRing