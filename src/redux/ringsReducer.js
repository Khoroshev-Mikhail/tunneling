import {checkArrays, getAllDates,} from './store'

let initialState = [
    {id : 1, segment : 227, tunneling : [20, 3, 1], montage : [20, 3, 2], pumping: 11},
    {id : 2, segment : 234, tunneling : [21, 3, 2], montage : [21, 3, 2],  pumping: 22},
    {id : 3, segment : 241, tunneling : [22, 3, 1], montage : [22, 3, 1],  pumping: 33},
    {id : 4, segment : 247, tunneling : [23, 3, 2], montage : [23, 3, 2],  pumping: 44},
    {id : 5, segment : 253, tunneling : [25, 3, 1], montage : [25, 3, 1],  pumping: 55},
    {id : 6, segment : 266, tunneling : [25, 3, 1], montage : [25, 3, 2],  pumping: 66},
    {id : 7, segment : 999, tunneling : [25, 3, 2], montage : [26, 3, 1],  pumping: 77},
    {id : 8, segment : 967, tunneling : [26, 3, 2], montage : [26, 3, 2],  pumping: 88},
    {id : 9, segment : 478, tunneling : [26, 3, 2], montage : [26, 3, 2],  pumping: 99},
    {id : 10, segment : 2227, tunneling : [26, 3, 2], montage : [26, 3, 2],  pumping: 1010},
    {id : 11, segment : 2345, tunneling : [26, 3, 2], montage : [26, 3, 2],  pumping: 1111},
]

const ringsReducer = (state = initialState, action) => {
    switch(action.type ){
        case 'UPDATE-RING' :
            if(!state[action.id-1].montage || state[action.id-1].montage == ''){
                state[action.id-1].montage = action.date;
            } 
            state[action.id-1].segment = +action.seg;
            return state;
        case 'UPDATE-PUMP' :  
            if(action.id >= 3){
                state[action.id-3].pumping = action.value;
            }
            return state 
        case 'INSERT-RING-DATE' :
            let newRingDate = (date) => {
                //Получаем айди даты куда будем добавлять данные
                let insertNewRing = (date) =>{
                    let allDates = getAllDates();
                    for(let i = 0; i < allDates.length; i++){
                        if(checkArrays(allDates[i], date)){
                            return i;
                        }
                    }
                }
                //Ищем в обратном порядке ближайшую дату в которой был монтаж или проходка. (т.к. все даты идут по порядку)
                let allDates = getAllDates();
                let lastId = insertNewRing(date) - 1;
                let rings = state;
                for(let i = lastId; i > 0; i--){
                    for(let k=0; k < rings.length; k++){   
                        if(checkArrays(allDates[i], rings[k].tunneling) || checkArrays(allDates[i], rings[k].montage)){
                            return allDates[i];
                        }
                    }
                }
            }
            
            //В найденной в предыдущей функции дате, находим максимальный id кольца (чтобы вставленное кольцо в новой дате было со следующим id)
            let arrRings = [];
            let arr = newRingDate(action.date);
            let rings = state;
            for(let i = 0; i < rings.length; i++){
                if(checkArrays(arr, rings[i].tunneling) || checkArrays(arr, rings[i].montage)){
                    arrRings.push(rings[i].id)
                }
            }
            let lastId = 0;
            for(let k =0; k < arrRings.length; k++){
                if(arrRings[k] > lastId){
                    lastId = arrRings[k];
                }
            }
            //Функция insertRing, надо экспортировать из объекта
            let newRing;
            if((!state[lastId-1].montage || state[lastId-1].montage == '') && state[lastId-1].tunneling){
                state[lastId-1].montage=action.date;
            } else{
                newRing =  {id : lastId, segment : 0, tunneling : action.date, montage : '',  pumping: ''}
                state.splice(lastId, 0, newRing);
                for(let i = lastId; i < state.length; i++){
                    state[i].id = state[i].id + 1;
                        if(i < state.length-1){
                            state[i].pumping = state[i+1].pumping
                        }else{
                            state[i].pumping = 0;
                        }
                }
            }
            return state;
        case 'DELETE-RING' :
            let deleteId = action.id - 1;
            state.splice(deleteId, 1);
            for(let i = deleteId; i < state.length; i++){
                state[i].id = state[i].id - 1; 
            }
            return state;
        case 'INSERT-RING' :
            let newRing2;
            if((!state[action.id-1].montage || state[action.id-1].montage == '') && state[action.id-1].tunneling){
                state[action.id-1].montage=action.date;
            } else{
                newRing2 =  {id : action.id, segment : 0, tunneling : action.date, montage : '',  pumping: ''}
                state.splice(action.id, 0, newRing2);
                for(let i = action.id; i < state.length; i++){
                    state[i].id = state[i].id + 1;
                        if(i < state.length-1){
                            state[i].pumping = state[i+1].pumping
                        }else{
                            state[i].pumping = 0;
                        }
                }
            }
            return state;
        default :
            return state;
    }
}


const UPDATE_RING = 'UPDATE-RING';
export const updateRingActionCreator = (id, segment, date) => {
    return {type : UPDATE_RING, id : id, seg : segment, date : date}
}

const UPDATE_PUMP = 'UPDATE-PUMP';
export const updatePumpActionCreator = (id, value) => {
    return {type : UPDATE_PUMP, id : id, value : value}
}

const GET_PUMP = 'GET-PUMP';
export const getPumpActionCreator = (id) => {
    return {type : GET_PUMP, id : id}
}

const DELETE_RING = 'DELETE-RING';
export const deleteRingActionCreator = (id) => {
    return {type : DELETE_RING, id : id}
}

const INSERT_RING = 'INSERT-RING';
export const insertRingActionCreator = (id, date) => {
    return {type : INSERT_RING, id : id, date : date}
}

const INSERT_RING_DATE = 'INSERT-RING-DATE';
export const insertRingDateActionCreator = (date) => {
    return {type : INSERT_RING_DATE, date : date}
}

export default ringsReducer;