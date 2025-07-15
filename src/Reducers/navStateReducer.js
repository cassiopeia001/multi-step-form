export default function navStateReducer (state, action){
    switch (action.type) {
        case "INCREMENT" : {
            return {
                step: Math.min(4, state.step + 1),
                direction: 1 
            }
        }
        case "DECREMENT": {
            return { 
                step: Math.max(1, state.step - 1),
                direction: -1
            }
        }
        case "GO_TO": {
            return {
                step: action.value,
                direction: state.step > action.value ? -1 : 1
            }
        }
        default: 
            return state
    }
}