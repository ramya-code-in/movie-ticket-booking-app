const initialData = {
    masterData: {},
    moviesData: [],
    theatreData: [],
    masterApiSuccess: false
}

const getSectionSuccess = (state, action) => {
    const resp = Object.assign({}, state,
        {
            masterData: action.getAllApiDetails,
            moviesData: action.getAllApiDetails.movies,
            theatreData: action.getAllApiDetails.theatre
        })
    return resp;
}
const reducer = (state = initialData, action) => {
    const type = action.type
    console.log(action)
    switch (type) {
        case "GET_MASTERDATA":
            return getSectionSuccess(state, action.resp);
            break;

        default:
            return state
    }
}
export default reducer;

