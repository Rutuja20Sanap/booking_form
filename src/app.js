import ReactDOM from 'react-dom/client';
import "./app.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
const formStyle = {
   fontSize:"20px",
   color:"#007399",
   fontStyle:"italic",
   marginLeft:"30px"

}
function Location(props){
    const {name,city}=props;
return(
   <>
    <div style={{
        color:"#007399",
        textAlign:"center",
        fontSize:"50px",
        margin:"50px",
        fontStyle:"italic",
        fontWeight:"bold"
    }}>Welcome ,Our {name} Hotel is in {city}.</div>
    <div className="bookingform">
        <form>
         <h1 style={{
            color:"#007399",
            textAlign:"center",
            fontFamily:"cursive"
         }}>Hotel_Booking_Form</h1>
 <br/>
 <label style={formStyle}>Your Name : </label>
 <input type="text" placeholder="Enter your name" id="name" required/>
<br/>
<br/>
 <label style={formStyle}>Your Email :</label>
<input type="email" placeholder="Enter your email" id="email"  required/>
<br/>
<br/>
 <label style={formStyle}>Your Phone :</label>
 <input type="tel" placeholder="Enter your PhoneNo" id="phone"  required/>
<br/>
<br/>
<label style={formStyle}>Adult :</label>
<input type="number" id="adults" /><br/><br/>
<label style={formStyle}>Children </label>
<input type="number" id="children" />
<br/>
<br/>
 <label style={formStyle}>Check-In Date :</label>
<input type="date" id="checkin"  required/><br/><br/>
<label style={formStyle}>Check-Out Date :</label>
<input type="date" id="checkout"  required/>
<br/>
<br/>

<label style={formStyle}>Room Type :</label>
    <select id="roomType" required>
      <option value="">Select Room Type</option>
      <option value="single">Single</option>
      <option value="double">Double</option>
      <option value="suite">Suite</option>
      </select>

<br/>
<br/>

<label style={formStyle}>Special Requests :</label>
 <textarea id="specialRequests" name="specialRequests" rows="4" cols="50" style={{
    borderRadius:"5px",
    marginLeft:"70px"
 }}></textarea>
<br/>
<br/>
<input type="submit" value="Book Now" id="btn"/>

 </form>
    </div>
    </>
   
);
}

root.render(
    <>
     <Location  name="Veggis" city = "Mumbai"/></>
);
export default Location