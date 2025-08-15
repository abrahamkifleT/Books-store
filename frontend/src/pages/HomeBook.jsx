import React, {useEffect, useState} from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {AiOutlineEdit} from "react-icons/ai"
import {BsInfoCircle} from "react-icons/bs"
import {MdOutlineAddBox, MdOutlineDelete} from "react-icons/md"

const HomeBook = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get("http://localhost:5555/books")
        .then((res) => {
            setBooks[res.data.data];
            setLoading[fasle];
        })
        .catch((error) => {
         console.log(error);
         setLoading(fasle);
        });
    },[])
    
  return (
    <div className='p-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl my-8'>Book List</h1>
          <Link to="/books/create">
           <MdOutlineAddBox className='text-sky-800 text-4xl' />
          </Link>
        </div>
         {loading ? (<Spinner />) :
          (
           <table className='w-full border-separate border-spacing-2'>
             <thead>
               <tr>
                <th className='border border-slate-600 rounded-md'>
                    No
                </th>
                <th className='border border-slate-600 rounded-md'>
                    Title
                </th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>
                    Author
                </th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>
                    Publich Year
                </th>
               </tr>
             </thead>
             <tbody>

             </tbody>
           </table>
          )
         }
    </div>
  )
}

export default HomeBook
