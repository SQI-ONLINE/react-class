const defaultState = {
    counter: 0
}

const reducer = (state = defaultState, action) => {
    if (action.type == 'INCREASE') {
        // let value = action.payload;
        let newState = { ...state, counter: state.counter + 1 }
        return newState;
    }

    if (action.type == 'DECREASE') {
        let newState = { ...state, counter: state.counter - 1 }
        return newState;
    }

    return state;

}

export default reducer;

