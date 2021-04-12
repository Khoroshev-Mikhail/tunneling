import ring from "../components/rings/ring";

//Сделать проверку данных Montage на входе, не должен быть раньше Tunneling

let store = {
    state : {
        rings : [
            {id : 1, segment : 227, tunneling : 11, montage : 11, shiftT : 1, shiftM : 1,  pumping: 15},
            {id : 2, segment : 234, tunneling : 11, montage : 12, shiftT : 2, shiftM : 1,  pumping: 13},
            {id : 3, segment : 241, tunneling : 12, montage : 12, shiftT : 1, shiftM : 1,  pumping: 14},
            {id : 4, segment : 241, tunneling : 12, montage : 13, shiftT : 2, shiftM : 1,  pumping: 14},
        ]
    },
    getState(){
        return this.state;
    },
    getSorting(){
        let rings = this.state.rings;
        let uniqueDates = [
            [0,0]
        ];

        const includeArr = (arr, value) => {
            for(let i = 0; i < arr.length; i++){
                if(arr[i][0] == value[0] && arr[i][1] == value[1]){
                    return true;
                }
            }
        }

        for(let i = 0; i < rings.length; i++){
            let newDate = [rings[i].tunneling, rings[i].shiftT];
            for(let k = 0; k < uniqueDates.length; k++){
                if(!includeArr(uniqueDates, newDate)){
                    uniqueDates.push(newDate);
                }
            }
            newDate = [rings[i].montage, rings[i].shiftM];
            for(let k = 0; k < uniqueDates.length; k++){
                if(!includeArr(uniqueDates, newDate)){
                    uniqueDates.push(newDate);
                }
            }
            /*newDate = [rings[i].montage, rings[i].shiftM];*/
 
        }
        //Добавить смену
        console.log(uniqueDates);
    }
}

export default store;