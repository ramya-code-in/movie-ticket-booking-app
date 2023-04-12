import { useEffect, useState } from "react";
import { getSections } from "../actions/getSections";
import "../../Styles/main.css";
import { SelectSeats } from "./SelectSeats";
import { useDispatch, useSelector } from "react-redux";

function DisplayMovies() {

    let dispatch = useDispatch();
    let [showSeats, setShowSeats] = useState(false);
    let [selectedMovie, selectMovie] = useState(null);
    let store = useSelector(appStore => appStore);
    let { moviesData = [], selectedTheatreId = '', masterData = {}, theatreData = [] } = store
    console.log(store, 'store');
    let selectedTheatreData = theatreData.find(theatre => theatre.theatre_id == selectedTheatreId);
    console.log(selectedTheatreData, 'theatreData');
    let { streaming_movies = [] } = selectedTheatreData;

    let onModalClose = (e) => {
        setShowSeats(e)
    }

    return <>
        <div>
            {showSeats && <SelectSeats onClose={onModalClose} movieData={selectedMovie} theatreData={selectedTheatreData} />}
            <div class="container-fluid mt-3">

                <div class="row">
                    {streaming_movies && streaming_movies.length > 0 && streaming_movies.map((movie, idx) => {

                        let movieData = moviesData.find(movObj => movObj.id == movie.movie_id);
                        let { time = '' } = movie;
                        console.log('movie data', movieData);
                        let { movie_name, release_date, language, thumbnail_url, imdb_rating, tags, running_time } = movieData
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
                                    <div><button type="button" onClick={() => {
                                        selectMovie(movie)
                                        setShowSeats(true);
                                    }} class="btn btn-info-outline small-button btn-outline-info">{time}</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    })}
                </div>
            </div >
        </div>
    </>
}

export default DisplayMovies;