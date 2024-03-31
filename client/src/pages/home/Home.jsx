import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"
import Demo from './Demo';
const Home = () => {
  const [news, setnews] = useState([]);
  const [loading,setloading] = useState(true);
  useEffect(() => {
    axios.get("https://news-app-backend-snowy.vercel.app/api/v1/addnews/getnews",{
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(response => {
        setloading(false);
        setnews(response.data.getnews)
      })
      .catch(error => {
        setloading(false);
        console.log(error);
      })
  }, []);
   if (loading) {
    return <div>Loading...</div>; 
  }
  return (
    <>
    <Demo/>
       <motion.div className='w-full border-2 p-10 flex flex-col gap-10 sm:flex-row justify-center items-center sm:items-start sm:justify-start h-auto'>
      {news.map(newsItem => (
        <Link key={newsItem._id} to={`/viewnews/${newsItem._id}`}>
          <div key={newsItem._id} className='border-2  p-6 w-[318px] h-[374px] shadow rounded-2xl'>
          <h1 className='tracking-wider font-bold font-titleFont'>{newsItem.title.substring(0,30)}{".."}</h1>
          <h4 className='tracking-wider font-bodyFont text-slate-500'>{newsItem.subtitle}</h4>
          <div className='h-[200px]'>
            <img src={newsItem.image} alt="img" className='rounded-md h-[176px] w-[264px]'/>
          </div>
          <p className='font-bodyFont text-xs tracking-wide'>{newsItem.content.substring(0,60)}{"..."}</p>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2'>
            <span className='text-slate-500 text-xs font-bodyFont'>Likes {newsItem.likes}</span>
            <span className='text-slate-500 text-xs font-bodyFont'>views {newsItem.views}</span>
            </div>
            <div>
              <span className='text-slate-500 text-xs font-bodyFont'>Comments {newsItem.comments}</span>
            </div>
          </div>

        </div>
        </Link>

      ))}

    </motion.div>
    </>
    
  )
}

export default Home
