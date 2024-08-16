import ReactDOM from 'react-dom/client';
import HotelBooking from "./app";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<h1>
    <HotelBooking name="Veggis" city = "Mumbai"/>
    </h1>)