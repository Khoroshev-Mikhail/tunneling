let store = {
    state : {
        rings : [
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
        ],
        enter : [
            {id : 1, enterDate : [25, 3, 2], segment : 2345, passport : 1},
            {id : 2, enterDate : [25, 3, 2], segment : 2227, passport : 2},
            {id : 3, enterDate : [25, 3, 2], segment : 478, passport : 3},
        ]
    },
    getState(){
        return this.state;
    },
    getDates(){
        let rings = this.state.rings;
        let uniqueDates = [
            [0, 0, 0]
        ];
        const includeArr = (arr, value) => {
            for(let i = 0; i < arr.length; i++){
                if(arr[i][0] == value[0] && arr[i][1] == value[1] && arr[i][2] == value[2]){
                    return true;
                }
            }
        }
        for(let i = 0; i < rings.length; i++){
            let newDate = rings[i].tunneling;
            for(let k = 0; k < uniqueDates.length; k++){
                if(!includeArr(uniqueDates, newDate)){
                    uniqueDates.push(newDate);
                }
            }
            newDate = rings[i].montage;
            for(let k = 0; k < uniqueDates.length; k++){
                if(!includeArr(uniqueDates, newDate)){
                    uniqueDates.push(newDate);
                }
            }
        }
        uniqueDates.shift();
        return uniqueDates;
    },
    addRing(seg, tun, mon, pump){
        let newId = this.state.rings.length+1;
        let newRing = {id : newId, segment: seg, tunneling : tun, montage: mon, pumping: pump};
        this.state.rings.push(newRing);
    },
    observer(callback){
        this.observer = callback;
    },
    getPump(id){
        if(id >= 3){
            return this.state.rings[id-3].pumping;
        } else {
            return '-';
        }
    },
    dispatch(action){
        if(action.type === 'UPDATE-RING'){
            if(!this.state.rings[action.id-1].montage || this.state.rings[action.id-1].montage == ''){
                this.state.rings[action.id-1].montage = action.date;
            } 
            this.state.rings[action.id-1].segment = +action.seg;
            this.observer();
        } else if(action.type === 'UPDATE-PUMP'){  
            if(action.id >= 3){
                this.state.rings[action.id-3].pumping = action.value;
                this.observer();
            }
        } else if (action.type === 'GET-PUMP'){
            if(action.id >= 3){
                return this.state.rings[action.id-3].pumping;
            } else {
                return '-';
            }
        }
    },
    
    insertRing(id, date){
        let newRing;
        if((!this.state.rings[id-1].montage || this.state.rings[id-1].montage == '') && this.state.rings[id-1].tunneling){
            this.state.rings[id-1].montage=date;
        } else{
            newRing =  {id : id, segment : 0, tunneling : date, montage : '',  pumping: ''}
            this.state.rings.splice(id, 0, newRing);
            for(let i = id; i < this.state.rings.length; i++){
                    this.state.rings[i].id = this.state.rings[i].id + 1;
                    if(i < this.state.rings.length-1){
                        this.state.rings[i].pumping = this.state.rings[i+1].pumping
                    }else{
                        this.state.rings[i].pumping = 0;
                    }
            }
        }
        this.observer();
    },
    //Функция срабатывает при нажатии кнопки возле даты, добавляет к дате первое кольцо 
    insertRingData(date){
        //
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
            let rings = this.state.rings;
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
        let arr = newRingDate(date);
        let rings = this.state.rings;
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
        this.insertRing(lastId, date);
    },
    //Функция удаляет кольцо
    deleteRing(id){
        let deleteId = id - 1;
        this.state.rings.splice(deleteId, 1);
        for(let i = deleteId; i < this.state.rings.length; i++){
            this.state.rings[i].id = this.state.rings[i].id - 1; 
        }
        this.observer();
    }
}

export default store;

export let getRingsByDate = (uniqueDate) => {
    let rings = store.state.rings;
    let ringsByDate = [];
    for(let i = 0; i < rings.length; i++){
        if(
            (rings[i].tunneling[0] == uniqueDate[0] && rings[i].tunneling[1] == uniqueDate[1] && rings[i].tunneling[2] == uniqueDate[2]) ||
            (rings[i].montage[0] == uniqueDate[0] && rings[i].montage[1] == uniqueDate[1] && rings[i].montage[2] == uniqueDate[2])
            ){
                ringsByDate.push(rings[i]);
        }
    }
    return ringsByDate;
}
export let getAllDates = () => {
    let allDates = [];
    for(let i = 19; i <= 31; i++){
        allDates.push([i, 3, 1]);
        allDates.push([i, 3, 2]);
    }
    for(let i = 0; i <= 30; i++){
        allDates.push([i, 4, 1]);
        allDates.push([i, 4, 2]);
    }
    for(let i = 0; i <= 31; i++){
        allDates.push([i, 5, 1]);
        allDates.push([i, 5, 2]);
    }
    return allDates;
}
export let checkArrays = (arr1, arr2) => {
    if(arr1[0] == arr2[0] && arr1[1] == arr2[1] && arr1[2] == arr2[2]){
        return true;
    } else{
        return false;
    }
    
}
