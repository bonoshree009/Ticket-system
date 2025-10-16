import React, { use, useState } from 'react';
import CardInfo from '../CardInfo';


const Body = ({promise}) => {
    const fetchpromise = use(promise)
    
    const [Data,setData] =useState(fetchpromise)
    const [progress,setprogress] =useState(0)
    const [resolvedCount, setResolvedCount] = useState(0);
   
   const count = (num)=>{
    setprogress(num.length)
   }

//bg-[url('/vector1.png')] bg-center bg-cover
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 my-10 gap-4 container mx-auto md:grid-cols-2 px-4'>
          <div className="bg-gradient-to-r  from-purple-700 to-purple-500 box ">In-Progess <span>{progress}</span></div>
          <div className='bg-gradient-to-r  from-green-200 via-green-400 to-green-900 box'>Resolved <span>{resolvedCount}</span></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 p-7 gap-5'>
            <CardInfo Data={Data} setData={setData} count={count} setResolvedCount={setResolvedCount}> </CardInfo>
        </div>

        </div>
    );
};

export default Body;