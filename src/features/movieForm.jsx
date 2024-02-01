import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getDetail } from "../redux/Slices/showSlice";
import { useNavigate } from "react-router-dom";
import { clearDetail } from "../redux/Slices/showSlice";
function MovieForm() {

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const detail=useSelector(getDetail);
    const[time,setTime]=useState('');
    const[day,setDay]=useState('');

    const handleSubmit = () => {
        if(day ==='' || time ===''){
            alert('Set the Date and Time');
        }
        else{
            alert('Ticket Booked Successfully');
            dispatch(clearDetail());
            navigate('/')
        }
     ;
    }

    


    return(
        <div>
            <label> Movie Name :</label>
            <input className="bg-black" type="text"  readOnly value={detail.name} />
            <label>Langugage : </label>
            <input  className="bg-black"  type="text" readOnly value={detail.language} />
            <label>Time :</label>

            <select  className="bg-black"  value={time} onChange={(e) => setTime(e.target.value)}>
                <option  className="bg-black"  value="" disabled>Select Time</option>
        <option value={detail.schedule.time}>{detail.schedule.time}</option>
            </select>

<label>Day :</label>
            <select  className="bg-black"  value={day} onChange={(e) => setDay(e.target.value)}>
                <option  className="bg-black"  value="" disabled>Select Day</option>
        <option value={detail.schedule.days[0]}>{detail.schedule.days[0]}</option>
            </select>

            <button className='mx-5 px-4 p-0.5  rounded-xl bg-violet-500 hover:bg-blue-600   ' onClick={() => handleSubmit()}>Submit</button>
        </div>
    )


}

export default MovieForm;