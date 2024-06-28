import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

  const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch ("http://api.github.com/users/Surya10102000")
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // },[])
  return (
    <div className=' text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data?.followers}
    <img className='m-auto' src={data?.avatar_url} alt="git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const res = await fetch ("http://api.github.com/users/Surya10102000")
  return res.json()
}