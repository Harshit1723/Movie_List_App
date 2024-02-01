import React ,{ useState,useEffect } from 'react'
import { getAllShows,getStatus,getError } from '../redux/Slices/showSlice'
import { useSelector,useDispatch } from 'react-redux'
import { fetchShows } from '../redux/Slices/showSlice'
import { Link, Routes ,BrowserRouter,Route} from 'react-router-dom';
import Summary from './summary';
import { useNavigate } from 'react-router-dom';
function ShowList() {

    const dispatch=useDispatch();
    const status=useSelector(getStatus);
    const shows = useSelector(getAllShows);
    const error = useSelector(getError);
    const Navigate=useNavigate();
  
    useEffect( () => {
      if(status === 'idle'){
        dispatch(fetchShows());
      }
    },[dispatch,status]);
  
    if(status === 'loading'){
      return <h1>Loading...</h1>
    }
    if(status ==='failed'){
      return <h2>Error:{error}</h2>
    }

 
  
    return (
      <div  className=' '>
        <div className=' mx-auto text-center'>
      <h1 className="text-4xl font-bold mt-5">Movie List</h1>
      </div>

      <ul  className='grid grid-cols-3 gap-5 items-center mx-10  mt-7 p-2'>
        {shows.map((show) => (
          <li key={show.show.id} className='border-b'>

            {show.show.image && show.show.image.medium && (
              <img className='mx-auto' src={show.show.image.medium} alt={show.show.name} />
            )}
            <div className=''>
            <h2 className='text-center text-xl font-bold mt-3'>{show.show.name}</h2>

              <div className=' mt-2 flex justify-around' >
            <p className=''>{show.show.language}</p>
            <p>Runtime : {show.show.runtime?show.show.runtime :'NA'} {show.show.runtime?'min':''}</p>
            </div>

            <h3 className='text-center mt-4 text-larger font-bold'>Rating : {show.show.rating.average?show.show.rating.average:'NA'}</h3>

              <div className='flex justify-center mt-3'>
            <button className=' px-4 p-0.5  rounded-xl bg-violet-500 hover:bg-blue-600  ' onClick={() => Navigate(`/summary/${show.show.id}`)}>Summary & Book</button>
            </div>
            
            </div>

            <br/>
            
            </li>
        ))}
      </ul>
      </div>
     
    )
}

export default ShowList;