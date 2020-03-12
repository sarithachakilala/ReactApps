const state1 = [{id: 1, msg: 'hello',}]
export default function(state=state1, action){
    switch(action.type) {
        case 'MoviesList':
             return action.payload
        default:
            return state
    }
}