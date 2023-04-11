import { useEffect, useState } from "react";
import { getSections } from "../actions/getSections";
import "../../Styles/main.css";
// import { SelectSeats } from "./SelectSeats";
import { useDispatch, useSelector } from "react-redux";
function DisplayMovies() {

    let dispatch = useDispatch()
    let [showSeats, setShowSeats] = useState(false);
    let store = useSelector(appStore => appStore);
    let { moviesData = [], theatreData = [], masterData = {} } = store
    console.log(store, 'store')
    useEffect(() => {
        if (Object.keys(masterData).length === 0)
            getSections(dispatch)
    }, [])

    return <><h2>Book Your Show</h2>
        <div class="container-fluid mt-3">
            <div class="row">
                {moviesData && moviesData.length > 0 && moviesData.map((movie, idx) => {
                    let { movie_name, release_date, language, thumbnail_url, imdb_rating, tags, running_time } = movie
                    return < div class="col-md-3 card-padding" >
                        <div class="card">
                            <img class="card-img-top" src={thumbnail_url} width='100%' height='325px' />
                            <div class="card-body">
                                <div class="card-title">
                                    <span class="small-font">{movie_name}</span>
                                    <span class="float-right"><span class="badge badge-warning small-badge-font">{'imdb ' + imdb_rating}</span></span>
                                    <div><span class="tiny-font">{release_date + ' . ' + running_time}</span></div>
                                    <div class="tags">{tags}</div>
                                </div>
                                <div><button type="button" onClick={() => setShowSeats(true)} class="btn btn-info-outline small-button btn-outline-info">8.30 am</button>
                                </div>
                            </div>
                        </div>

                    </div>
                })}
            </div>
        </div >
        {/* {showSeats && <SelectSeats />
        } */}
    </>
}

export default DisplayMovies;