import { useEffect } from "react";
import { getSections } from "../actions/getSections";

function UserLanding() {

    useEffect(() => {
        getSections()
    }, [])
    return <><h2>Book Your Show</h2></>
}

export default UserLanding;