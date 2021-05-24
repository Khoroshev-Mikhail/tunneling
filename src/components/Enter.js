import EnterRing from './entering/enterRing';

const Enter =()=>{
    let admin = true;
    return(
        <table className="enter-top-date">
            <tr>
                <td colSpan="2">Дата входного контроля</td>
            </tr>
        <EnterRing />
        </table>
    )
}

export default Enter;