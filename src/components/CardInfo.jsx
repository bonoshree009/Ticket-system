import React, { useState } from 'react';
import SingleCard from './SingleCard';
import TaskStatus from './TaskStatus';


const CardInfo = ({Data}) => {
    //console.log(Data)
const [selectedCard, setSelectedCard] = useState([]);

    const parenthandle =(func)=>{
        
        //console.log(func)
         setSelectedCard([...selectedCard, func]);
    }

    return (
        <>
        <div className='col-span-2'>
            <p className='font-bold text-2xl mb-4'>Customer Tickets</p>
            <div className='grid grid-cols-2 gap-3'>
                {
                    Data.map(ele => <SingleCard ele={ele} key={ele.id} Data={Data} parenthandle={parenthandle} ></SingleCard>)
                }

            </div>
        </div>


        <div>
            <div>
                <p className='font-bold text-2xl mb-4'>Task Status</p>
               <TaskStatus selectedCard={selectedCard} setSelectedCard={setSelectedCard} ></TaskStatus> 
            </div>

           <div><p className='font-bold text-2xl  my-4'>Resolved Task</p></div>
          </div>
        
        </>
    );
};

export default CardInfo;