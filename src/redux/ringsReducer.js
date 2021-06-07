import {checkArrays, getAllDates,} from './store'

const ringsReducer = (state, action) => {
    if(action.type === 'UPDATE-RING'){
        if(!state[action.id-1].montage || state[action.id-1].montage == ''){
            state[action.id-1].montage = action.date;
        } 
        state[action.id-1].segment = +action.seg;
        return state;
    } else if(action.type === 'UPDATE-PUMP'){  
        if(action.id >= 3){
            state[action.id-3].pumping = action.value;
        }
        return state
    }else if (action.type === 'INSERT-RING-DATE'){
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
    } else if(action.type === 'DELETE-RING'){
        let deleteId = action.id - 1;
        state.splice(deleteId, 1);
        for(let i = deleteId; i < state.length; i++){
            state[i].id = state[i].id - 1; 
        }
        return state;
    } else if (action.type === 'INSERT-RING'){
        let newRing;
        if((!state[action.id-1].montage || state[action.id-1].montage == '') && state[action.id-1].tunneling){
            state[action.id-1].montage=action.date;
        } else{
            newRing =  {id : action.id, segment : 0, tunneling : action.date, montage : '',  pumping: ''}
            state.splice(action.id, 0, newRing);
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
    }
}

export default ringsReducer;