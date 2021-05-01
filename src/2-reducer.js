const reducer = (state, action) => {
    if (action.type == "UPDATE_NAME") {
        let value = action.payload;
        let newState = { ...state, name: value }
        return newState;
    }

    if (action.type == "ADD_USER") {
        let value = action.payload;
        let newState = { ...state, userArr: [...state.userArr, value], isMessageOpen: true };
        return newState
    }

    if (action.type == "CLOSE_MESSAGE") {
        return { ...state, isMessageOpen: false };
    }
    return state;
}

export default reducer;