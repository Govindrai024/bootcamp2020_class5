
const counterReducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
        return state + 1;
        case 'DICREMENT':
        return state - 1;
        default:

    }

}

export default counterReducer;