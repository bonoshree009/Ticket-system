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


    return (
        <div className='container mx-auto '>

            <div className='grid grid-cols-1 my-10 gap-4 container mx-auto md:grid-cols-2 px-4 relative'>
          {/* <div className=" absolute inset-0   box bg-gradient-to-r  from-purple-700 to-purple-500 ">In-Progess <span>{progress}</span></div> */}
       <div className='box overflow-hidden  relative bg-gradient-to-r  from-purple-700 to-purple-500 '>
              <img src="/vector1.png" alt="background" className='absolute inset-0 h-full object-cover z-0' />
              <img src="/vector1.png" alt="Upside-Down" className="absolute inset-0 translate-x-11/12 h-full object-cover transform scale-x-[-1] z-10" />
             <p className="relative z-10 text-2xl">In-Progess <span>{progress}</span></p>
       </div>

   <div className="box overflow-hidden relative bg-gradient-to-r from-green-200 via-green-400 to-green-900">
                  <img src="/vector1.png" alt="Background"  className="absolute inset-0  h-full object-cover z-0"/>
                 <img src="/vector1.png" alt="Upside-Down" className="absolute inset-0 translate-x-11/12 h-full object-cover transform scale-x-[-1] z-10"/>
                <p className="relative z-10 text-2xl"> Resolved <span>{resolvedCount}</span> </p>
    </div>


        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 p-7 gap-5'>
            <CardInfo Data={Data} setData={setData} count={count} setResolvedCount={setResolvedCount}> </CardInfo>
        </div>

        </div>
    );
};

export default Body;