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