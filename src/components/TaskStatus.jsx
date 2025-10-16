import React from 'react';

const TaskStatus = ({selectedCard,setSelectedCard,count,complete,setData}) => {
   
    //console.log(selectedCard)

    const handleComplete =(id)=>{
        console.log("clicked")
        const notcomplete=selectedCard.filter(ele => ele.id !== id)
        const completeCard=selectedCard.find(ele => ele.id == id)
         complete(completeCard)
         setData(pre =>  pre.filter(item => item.id !== id ))
        
        setSelectedCard(notcomplete)
        count(notcomplete)
    }
  
    return (<>

            {selectedCard.length === 0 ? ( <p>Select a ticket to add to Task Status</p>):
           (
            selectedCard.map(card => (<div className=' bg-gray-100 p-3 rounded-xl mb-3 md:p-5'> 
            <p className='font-bold text-[8px] md:text-xl text-center'> {card.title}-{card.customer}</p>
                  <button className='w-full bg-green-800 p-2 text-white my-3' onClick={()=>handleComplete(card.id)}> complete</button></div>))
            )
    
            }
            </>
        
    );
};

export default TaskStatus;