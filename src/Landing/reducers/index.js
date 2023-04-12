const initialData = {
    masterData: {},
    moviesData: [],
    theatreData: [],
    masterApiSuccess: false,
    selectedMovieId: null,
    selectedTheatreId: null,
    bookingStatus: []
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

const setSelectedTheatre = (state, action) => {
    const updatedStore = Object.assign({}, state, {
        selectedTheatreId: action.theatreId
    })
    return updatedStore;
}

const confirmTickets = (state, action) => {
    let bookingData = state.bookingStatus;
    bookingData.push({
        seatsBooked: action.bookingInfo.booked_seats,
        bookingConfirmed: true,
        bookingMsg: "" + action.bookingInfo.booked_seats + " " + action.msg,
        theatreId: action.bookingInfo.theatre_id,
        movieId: action.bookingInfo.movie_id
    })
    const updatedStore = Object.assign({}, state,
        { bookingStatus: bookingData })
    return updatedStore;
}

const reducer = (state = initialData, action) => {
    const type = action.type
    console.log(action)
    switch (type) {
        case "GET_MASTERDATA":
            return getSectionSuccess(state, action.resp);
            break;
        case "SET_THEATRE_ID":
            return setSelectedTheatre(state, action);
            break;
        case "CONFIRM_BOOKING":
            return confirmTickets(state, action);
            break;
        default:
            return state
    }
}
export default reducer;

