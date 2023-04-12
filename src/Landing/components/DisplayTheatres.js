import { useEffect, useState } from "react";
import { getSections, setTheatreId } from "../actions/getSections";
import "../../Styles/main.css";
// import { SelectSeats } from "./SelectSeats";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router'

function DisplayTheatres() {

    let dispatch = useDispatch();
    let history = useNavigate();

    let store = useSelector(appStore => appStore);
    let { moviesData = [], theatreData = [], masterData = {} } = store
    console.log(store, 'store')
    useEffect(() => {
        if (Object.keys(masterData).length === 0)
            getSections(dispatch)
    }, [])

    return <>
        <div>
            <h2>Book your show</h2>
            <h4>Enjoy movies in your favorite theatres</h4>
            <div class="container-fluid mt-3">

                <div class="row">
                    {theatreData && theatreData.length > 0 && theatreData.map((theatre, idx) => {
                        let { theatre_id, theatre_name, address, website, thumbnail_url, customer_rating } = theatre
                        return < div class="col-md-3 card-padding" >
                            <button class="card" onClick={() => {
                                console.log('store before route', store)
                                setTheatreId(dispatch, theatre_id)

                                history('/book-tickets')
                                console.log('store afer route', store)
                            }}>
                                <img class="card-img-top" src={thumbnail_url} width='100%' height='325px' />
                                <div class="card-body">
                                    <div class="card-title">
                                        <span class="small-font">{theatre_name}</span>
                                        <span class="float-right"><span class="badge badge-warning small-badge-font">{customer_rating}</span></span>
                                        <div><span class="tiny-font">{address}</span></div>
                                        <div class="tags">{website}</div>
                                    </div>
                                    {/* <div><button type="button" class="btn btn-info-outline small-button btn-outline-info">Book Tickets</button>
                                    </div> */}
                                </div>
                            </button>

                        </div>
                    })}
                </div>
            </div >
        </div>
    </>
}

export default DisplayTheatres;