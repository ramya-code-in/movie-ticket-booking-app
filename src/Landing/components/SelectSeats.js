import "../../Styles/main.css";
import ReactModal from "react-modal";
import "../../Styles/main.css";
import { confirmBooking } from "../actions/getSections";
import { useDispatch, useSelector } from "react-redux";

export const SelectSeats = (props) => {
    let dispatch = useDispatch();
    let store = useSelector(appStore => appStore);
    let { bookingStatus = [] } = store
    let { onClose, movieData = {}, theatreData = {} } = props || {};
    console.log(movieData, 'movie Data')
    let { booked_seats = [] } = movieData;
    let { theatre_name = '', theatre_id = '' } = theatreData;
    let { movie_name = '', time = '', movie_id = '' } = movieData;
    let findCurrentBooking = bookingStatus.find(info => info.theatreId == theatre_id && info.movieId == movie_id)
    let { bookingConfirmed = false, seatsBooked = [], bookingMsg = '', movieId = '', theatreId = '' } = findCurrentBooking || {};
    let selectedSeats = [];
    let date = new Date();
    const updateSelectedSeats = (seat) => {
        selectedSeats.push(seat)
        console.log(selectedSeats, 'selected seats')
    }
    const onConfirmBooking = () => {
        let bookingData = {
            movie_name: movie_name,
            booked_seats: selectedSeats,
            show_time: time,
            theatre_name: theatre_name,
            email: "xyz@email.com",
            date: date.getDate(),
            theatre_id: theatre_id,
            movie_id: movie_id
        }
        console.log(bookingData, 'bookingData')
        bookingData && confirmBooking(dispatch, bookingData);
    }

    const getSeats = () => {
        let seats = []
        for (let seat = 1; seat <= 100; seat++) {
            seats.push(<button class="seat-box" disabled={booked_seats.includes(seat)}
                onClick={() => updateSelectedSeats(seat)}>{seat}</button>)
        }
        return seats;
    }
    return <div class="modalBackground">
        <div class="modalContainer">
            {!bookingConfirmed && <div>
                <h4>Select your seats to watch {movie_name}</h4>
                <div class="close-button"><button onClick={() => {
                    console.log('closed')
                    onClose(false)
                }}>X</button></div>
                <div class="seats-container">{getSeats()}</div>
                <button type="button" class="btn btn-info" onClick={() => onConfirmBooking()}>Confirm Booking</button>
            </div>}
            {bookingConfirmed && <div>
                <h3>{bookingMsg}</h3>
                <div class="close-button"><button onClick={() => {
                    console.log('closed')
                    onClose(false)
                }}>X</button></div>
            </div>}
        </div>
    </div>
}
