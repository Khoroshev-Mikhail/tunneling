import ring from "../components/rings/Ring";

//Сделать проверку данных Montage на входе, не должен быть раньше Tunneling

let store = {
    state : {
        rings : [
            {id : 1, segment : 227, monthT: 3, monthM: 3, tunneling : 11, montage : 11, shiftT : 1, shiftM : 1,  pumping: 15},
            {id : 2, segment : 234, monthT: 3, monthM: 3, tunneling : 11, montage : 12, shiftT : 2, shiftM : 1,  pumping: 13},
            {id : 3, segment : 241, monthT: 3, monthM: 3, tunneling : 12, montage : 12, shiftT : 1, shiftM : 1,  pumping: 14},
            {id : 4, segment : 241, monthT: 3, monthM: 3, tunneling : 12, montage : 13, shiftT : 2, shiftM : 1,  pumping: 14},
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
            let newDate = [rings[i].monthT, rings[i].tunneling, rings[i].shiftT];
            for(let k = 0; k < uniqueDates.length; k++){
                if(!includeArr(uniqueDates, newDate)){
                    uniqueDates.push(newDate);
                }
            }
            newDate = [rings[i].monthM, rings[i].montage, rings[i].shiftM];
            for(let k = 0; k < uniqueDates.length; k++){
                if(!includeArr(uniqueDates, newDate)){
                    uniqueDates.push(newDate);
                }
            }
 
        }
        uniqueDates.shift();
        return uniqueDates;
    }
}

export let getRingsByDate = (uniqueDate) => {
    let rings = store.state.rings;
    let ringsByDate = [];
    for(let i = 0; i < rings.length; i++){
        if(
            (rings[i].monthT == uniqueDate[0] && rings[i].tunneling == uniqueDate[1] && rings[i].shiftT == uniqueDate[2]) ||
            (rings[i].monthM == uniqueDate[0] && rings[i].montage == uniqueDate[1] && rings[i].shiftM == uniqueDate[2])
            ){
                ringsByDate.push(rings[i]);
        }
    }
    return ringsByDate;
}

export default store;