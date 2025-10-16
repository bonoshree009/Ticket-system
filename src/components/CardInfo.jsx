import React, { useState } from 'react';
import SingleCard from './SingleCard';
import TaskStatus from './TaskStatus';
import { ToastContainer, toast } from 'react-toastify';


const CardInfo = ({Data ,setData,count,setResolvedCount}) => {
    //console.log(Data)
const [selectedCard, setSelectedCard] = useState([]);
  const [resolve,setresolve] =useState([])

    const parenthandle =(func)=>{
         toast.success("Task Added Successfully !");
         const newCard = [...selectedCard, func];
        setSelectedCard(newCard)
         count(newCard)
    }
 const complete =(com)=>{
    //console.log(com)
       setresolve([...resolve,com])
       setResolvedCount(r => r+1)
       
 }


    return (
        <>
        <div className='col-span-2'>
            <p className='font-bold text-2xl mb-4'>Customer Tickets</p>
            <div className='grid grid-cols-2 gap-3'>
                {
                    Data.map(ele=> <SingleCard ele={ele} key={ele.id} Data={Data}  parenthandle={parenthandle}  ></SingleCard>)
                }
            </div>
        </div>


        <div>
            <div>
                <p className='font-bold text-2xl mb-4'>Task Status</p>
               <TaskStatus selectedCard={selectedCard} setSelectedCard={setSelectedCard}count={count}complete={complete} setData={setData} ></TaskStatus> 
            </div>

           <div>
            <p className='font-bold text-2xl  my-4'>Resolved Task</p>
                {
                resolve.length !== 0 ? ( resolve.map(card => <div className=' bg-gray-100 p-3 rounded-xl mb-3 md:p-5' key={card.id}>
                <p className='font-bold text-[8px] md:text-xl text-center'>{card.title}</p></div> )):( <p>No resolved tasks yet.</p>)
                 }
           </div>
          </div>
           <ToastContainer />
        
        </>
    );
};

export default CardInfo;