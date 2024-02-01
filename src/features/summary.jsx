import React, { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { getDetail,getSummary,getStatus ,clearDetail} from "../redux/Slices/showSlice";
import { useDispatch,useSelector } from "react-redux";
import MovieForm from "./movieForm";


function Summary() {
    const param=useParams();
    const dispatch=useDispatch();
    const navigate = useNavigate();

    useEffect( () => {
        dispatch(getSummary(param.id))
    });

    const item = useSelector(getDetail);
    const status=useSelector(getStatus);

    const handleBack = () => {
        dispatch(clearDetail() )
        navigate('/');
    }

    const handleForm = () => {
        navigate('/form');
    }

    if(status==='laoding'){
        return <h2>Loading...</h2>
    }
   
return(
    <div className="border-2 p-10">

     <h1 className="text-center">{item.name}</h1>
     <p>{item.summary}</p>
     <button className=' px-4 p-0.5  rounded-xl bg-violet-500 hover:bg-blue-600  ' onClick={() => handleBack()}>Back</button>
     <button className=' px-4 p-0.5  rounded-xl bg-violet-500 hover:bg-blue-600  ' onClick={() => handleForm()} >Book Ticket</button>
    </div>
);
}

export default Summary;