import ring from "../components/rings/ring";

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
        let uniqueDates = [];
        for(let i = 0; i < rings.length; i++){
            let newDate = [rings[i].tunneling, rings[i].shiftT];
            if(!uniqueDates.includes(newDate)){
                uniqueDates.push(newDate);
            }
            newDate = [rings[i].montage, rings[i].shiftM];
            if(!uniqueDates.includes(newDate)){
                uniqueDates.push(newDate);
            }
        }
        //Добавить смену
        console.log(uniqueDates);
        let ar1 = [0, 1];
        let ar2 = [0, 1];
        if(ar1 == ar2){
            console.log('ara');
        }
    }
}

export default store;