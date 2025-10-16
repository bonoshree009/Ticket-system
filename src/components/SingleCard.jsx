import React from 'react';

const SingleCard = ({ele ,Data,parenthandle}) => {
 

    const handleClick = ()=>{
    console.log("clicked")
    const currentCard = Data.find(el => el.id == ele.id)
    parenthandle(currentCard)
    //console.log(currentCard)
    }
    return (
        <div className=' p-2 md:p-4 bg-gray-100 rounded-xl' onClick={handleClick}>
            <div className='flex justify-between'>
                <p className='font-bold text-[10px] md:text-xl'> {ele.title}-{ele.customer}</p>

                  <button className={` text-[10px] text-xl p-2 rounded-2xl ${ele.status === 'Open' ?
                     'bg-green-300 text-green-800' : ele.status === 'In Progress' ?
                    'bg-amber-300 text-amber-600' : "" }`}>{ele.status}</button>
                </div>
           
                <p className='text-gray-400'>{ele.description}</p>

                <div className='flex gap-2'>
                    <p className=' '>{ele.createdAt}</p>
                    
                   <p className= {`${ele.priority === 'High' ?
                     ' text-red-700' : ele.priority === 'Medium' ?
                    ' text-amber-600': ele.priority === 'Low'? 
                    ' text-green-300' : "" }`} >  {ele.priority}  </p>
                       </div>
        </div>
    );
};

export default SingleCard;