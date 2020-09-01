const initialState = {
    counter: 0
}

export default function Reduxcounter1(state = initialState, action) {

    switch (action.type) {
        case "ADD": return {
            counter: state.counter + 1
        };
        case "SUB" : return {
            counter: state.counter - 1
        };
        case "ADD_Number": return {
            counter: state.counter + action.value
        }
        case "SUB_Number": return {
            counter: state.counter - action.value
        }
        default: return state
    }

}

