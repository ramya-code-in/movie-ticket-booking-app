import axios from "axios";

export const getSections = (dispatch, requestData) => {

    if (window.enablePostCall) {
        axios.post("http://localhost:3001/database/getAllDetails.json", requestData, {
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=UTF-8"
            }
        }
        ).then(({ data }) => {
            onSuccess(data)
            console.log(data)
        })
    } else {
        axios.get("http://localhost:3001/database/getAllDetails.json", {
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=UTF-8"
            }
        }
        ).then(({ data }) => {
            onSuccess(data)
            console.log(data)
        })
    }

    const onSuccess = (responseData) => {
        dispatch({
            type: "GET_MASTERDATA",
            resp: responseData
        })
    }
}

export const setTheatreId = (dispatch, id) => {
    dispatch({
        type: "SET_THEATRE_ID",
        theatreId: id
    })
}

export const confirmBooking = (dispatch, bookingData) => {

    if (window.enablePostCall) {
        axios.post("http://localhost:3001/database/confirmBooking.json", bookingData, {
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=UTF-8"
            }
        }
        ).then(({ data }) => {
            console.log(data)
            dispatchConfirmBooking(dispatch, data, bookingData)
        })
    } else {
        axios.get("http://localhost:3001/database/confirmBooking.json", {
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=UTF-8"
            }
        }
        ).then(({ data }) => {
            console.log(data)
            dispatchConfirmBooking(dispatch, data, bookingData)
        })
    }

}

const dispatchConfirmBooking = (dispatch, resp, bookingData) => {
    dispatch({
        type: "CONFIRM_BOOKING",
        bookingInfo: bookingData,
        msg: resp.message
    })
}